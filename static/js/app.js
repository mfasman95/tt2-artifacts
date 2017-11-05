function generateArtifacts() {
    $('#artifacts').empty();
    $.each(artifacts, function(k,v) {
        div = '<div class="artifact">' +
            '<label><input id="' + k + '" value="' + v.level + '" type="tel" onchange="updateArtifacts()" />' + v.name + '</label><br />' +
	    '<span id="' + k + 'effect">';
        if('' != v.current_effect) {
            div += displayEffect(v.current_effect, v.type) + v.bonus;
        }
        div += '</span><span id="' + k + 'ad">';
        if('' != v.current_ad) {
            div += displayPct(v.current_ad) + ' Artifact Damage';
        }
        div += '</span><span id="' + k + 'cost">';
	if('' != v.displayCost) {
	    div += v.displayCost + ' Relics to Upgrade';
	}
	div += '</span>';
        div += '</span><span id="' + k + 'weff">';
	if('' != v.efficiency) {
	    div += v.weight + ' Weight &#x2022; ' + k.efficiency + ' Efficiency';
	}
	div += '</span>';
        div += '</div>'
        $('#artifacts').append(div);
    });
    window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
    window.localStorage.setItem('tree', $('#tree').val());
    window.localStorage.setItem('hero', $('#hero').val());
    window.localStorage.setItem('spell', $('#spell').val());
    window.localStorage.setItem('sword', $('#sword').val());
    window.localStorage.setItem('helmet', $('#helmet').val());
    window.localStorage.setItem('chest', $('#chest').val());
    window.localStorage.setItem('aura', $('#aura').val());
    window.localStorage.setItem('slash', $('#slash').val());
    window.localStorage.setItem('pet', $('#pet').val());
    window.localStorage.setItem('relic_factor', $('#relic_factor').val());
    window.localStorage.setItem('forcebos', $('#forcebos').val());
}

function regenerateArtifacts() {
    $.each(artifacts, function(k,v) {
        $('#' + k).val(v.level);
	value = '';
        if('' != v.current_effect) {
            value = displayEffect(v.current_effect, v.type) + v.bonus;
        }
        $('#' + k + 'effect').empty().append(value);
        value = '';
        if('' != v.current_ad) {
            value = displayPct(v.current_ad) + ' Artifact Damage';
        }
        $('#' + k + 'ad').empty().append(value);
        value = '';
	if('' != v.displayCost) {
	    value = v.displayCost + ' Relics to Upgrade';
	}
        $('#' + k + 'cost').empty().append(value);
        value = '';
	if('' != v.efficiency) {
	    value = v.weight + ' Weight &#x2022; ' + k.efficiency + ' Efficiency';
	}
        $('#' + k + 'weff').empty().append(value);
    });
    window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
    window.localStorage.setItem('tree', $('#tree').val());
    window.localStorage.setItem('hero', $('#hero').val());
    window.localStorage.setItem('spell', $('#spell').val());
    window.localStorage.setItem('sword', $('#sword').val());
    window.localStorage.setItem('helmet', $('#helmet').val());
    window.localStorage.setItem('chest', $('#chest').val());
    window.localStorage.setItem('aura', $('#aura').val());
    window.localStorage.setItem('slash', $('#slash').val());
    window.localStorage.setItem('pet', $('#pet').val());
    window.localStorage.setItem('relic_factor', $('#relic_factor').val());
    window.localStorage.setItem('forcebos', $('#forcebos').val());
}

function updateArtifacts() {
    $('.artifact input').each(function(k,v) {
        artifacts[v.id].level = parseInt(v.value);
    });
    calculate(artifacts, true);
}

function generateUpgrades() {
    window.localStorage.setItem('relic_factor', $('#relic_factor').val())
    window.localStorage.setItem('forcebos', $('#forcebos').val());
    forceBOS = parseInt($('#forcebos').val());
    relics = parseFloat($('#relics').val());
    switch($('#relic_factor').val()) {
       case '_':
         break;

       case 'K':
         relics *= 1000;
         break;

       case 'M':
         relics *= 1000000;
         break;

       case 'B':
         relics *= 1000000000;
         break;

       case 'T':
         relics *= 1000000000000;
         break;
    }
    gtag('event', 'Upgrades', {
      'event_category': 'Upgrades',
      'event_action': 'Generate',
      'event_label': 'List',
      'event_value' : relics
    });
    upgrades = {};
    temp_artifacts = $.extend(true, {}, artifacts);
    litmus = false;
    $.each(artifacts, function(k,v) {
      if(v.level > 0) { litmus = true; }
    });
    if(false == litmus) {
      $('#suggestions').empty().append('<li>You must have at least 1 artifact enabled to use this.</li>');
      return
    }
    while(forceBOS > 0) {
        if(relics >= temp_artifacts['bos'].cost) {
            forceBOS--;
	    if(undefined == upgrades['bos']) {
                upgrades['bos'] = 1;
	    } else {
	        upgrades['bos']++;
	    }
            relics -= temp_artifacts['bos'].cost;
	    temp_artifacts['bos'].level++;
	    calculate(temp_artifacts, false);
	} else {
            forceBOS = 0;
	}
    }
    while(true) {
        winner = determineWinner(temp_artifacts);
        if(winner === false) {
            console.log('false winner');
        } else {
            if(relics >= temp_artifacts[winner].cost) {
                if(undefined == upgrades[winner]) {
                    upgrades[winner] = 1;
                } else {
                    upgrades[winner]++;
                }
                relics -= temp_artifacts[winner].cost;
                temp_artifacts[winner].level++;
                calculate(temp_artifacts, false);
            } else {
                break;
            }
        }
    }
    litmus = false;
    $.each(upgrades, function(k,v) {
      litmus = true;
    });
    if(false == litmus) {
      $('#suggestions').empty().append('<li>You cannot afford to make the next best upgrade. Please try again when you have more relics.</li>');
      return
    }
    suggestions = '';
    $.each(artifacts, function(k,v) {
        if(k in upgrades) {
		suggestions += '<li>' +
		    v.name + ' ' +
		    v.level + ' => ' +
		    (upgrades[k] + v.level) + ' (+' +
		    upgrades[k] + ')</li>';
	}
    });
    $('#suggestions').empty().append(suggestions);
    $('#accept').empty().append(
            '<input type="submit" value="Complete" onclick="acceptSuggestions();" />');
}

function determineWinner(data) {
    winner = false;
    litmus = false;
    $.each(data, function(k,v) {
        if('' !== v.efficiency) {
            if(winner === false) {
                winner = k;
                litmus = v.efficiency;
            } else if(litmus > v.efficiency) {
                winner = k;
                litmus = v.efficiency;
            }
        }
    });
    return(winner);
}

function acceptSuggestions() {
    gtag('event', 'Upgrades', {
      'event_category': 'Upgrades',
      'event_action': 'Accept',
      'event_label': 'List',
    });
    $.each(upgrades, function(k,v) {
        artifacts[k].level += v;
    });
	$('#accept').empty();
	$('#suggestions').empty();
	$('#relics').val('');
    calculate(artifacts, true);
}

function calculate(data, regenerate) {
    totalAD = 0;
    $.each(data, function(k,v) {
	totalAD += v.level * v.ad;
    });
    $.each(data, function(k,v) {
        data[k].efficiency = '';
        data[k].cost = '';
        data[k].displayCost = '';
        if(v.level > 0) {
	    current_ad = v.level * v.ad
	    current_effect = 1 + v.effect * Math.pow(v.level, 1 + (v.cexpo - 1) * Math.pow(Math.min(v.grate * v.level, v.gmax), v.gexpo));
            data[k].current_ad = current_ad;
            data[k].current_effect = current_effect
            if(data[k].max != -1 || data[k].max > v.level) {
                cost = Math.pow(v.level + 1, v.cexpo) * v.ccoef;
                data[k].cost= cost;
                data[k].displayCost = displayTruncated(cost);
                next_effect = 1 + v.effect * Math.pow(v.level + 1, 1 + (v.cexpo - 1) * Math.pow(Math.min(v.grate * (v.level + 1), v.gmax), v.gexpo));
                next_ad_jump = ((v.level + 1) * v.ad) - (v.level * v.ad);
                effect_eff = Math.abs(Math.log((next_effect/current_effect/cost) * v.rating));
	        ad_eff = Math.abs(Math.log(next_ad_jump/totalAD/cost));
		data[k].efficiency = effect_eff + ad_eff;
            }
        } else {
            data[k].current_ad = '';
            data[k].current_effect = '';
        }
    });
    if(true === regenerate) {
        regenerateArtifacts();
    }
}

function displayPct(value) {
    value = displayTruncated(value * 100);
    return(value + '%');
}

function displayTruncated(value) {
    if(value > 999999999999) {
        value = (value / 1000000000000).toFixed(3).replace(/\.?0+$/, '');
        value += 'T';
    } else if(value > 999999999) {
        value = (value / 1000000000).toFixed(3).replace(/\.?0+$/, '');
        value += 'B';
    } else if(value > 999999) {
        value = (value / 1000000).toFixed(3).replace(/\.?0+$/, '');
        value += 'M';
    } else if(value > 999) {
        value = (value / 1000).toFixed(3).replace(/\.?0+$/, '');
        value += 'K';
    } else {
        value = (value * 1).toFixed(3).replace(/\.?0+$/, '');
    }
    return(value);
}

function displayEffect(value, type) {
    switch(type) {
        case 'multiply':
            return 'x' + displayTruncated(value);

        case 'add':
            value = value -1
            if(value > 0) {
	        return '+' + displayTruncated(value);
	    } else {
	        return displayTruncated(value);
	    }

        case 'multiply_pct':
            return 'x' + displayPct(value);

        case 'pct':
            value = value -1
            if(value > 0) {
                return '+' + displayPct(value);
            } else {
                return displayPct(value);
            }
    }
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
	localArtifacts = JSON.parse(window.localStorage.getItem('artifacts'));
	$.each(localArtifacts, function(k, v) {
        artifacts[k].level = v.level;
	});
    $('#tree').val(window.localStorage.getItem('tree'));
    $('#hero').val(window.localStorage.getItem('hero'));
    $('#spell').val(window.localStorage.getItem('spell'));
    $('#sword').val(window.localStorage.getItem('sword'));
    $('#helmet').val(window.localStorage.getItem('helmet'));
    $('#chest').val(window.localStorage.getItem('chest'));
    $('#aura').val(window.localStorage.getItem('aura'));
    $('#slash').val(window.localStorage.getItem('slash'));
    $('#pet').val(window.localStorage.getItem('pet'));
    $('#relic_factor').val(window.localStorage.getItem('relic_factor'));
    $('#forcebos').val(window.localStorage.getItem('forcebos'));
}

origWeights = jQuery.extend(true, {}, artifacts);
generateArtifacts();
adjustWeights();
