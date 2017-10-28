function generateTable() {
    $('tbody').empty();
    $.each(artifacts, function(k,v) {
        row = '<tr>' +
            '<td><input id="' + k + '" value="' + v.level + '" type="tel" onchange="updateTable()" /></td>' +
            '<td id="' + k + 'name">' + v.name + '</td>' +
            '<td id="' + k + 'effect">';
        if('' != v.current_effect) {
            row += displayEffect(v.current_effect, v.type) + v.bonus;
        }
        row += '</td>' +
            '<td id="' + k + 'ad" class="accounting">';
        if('' != v.current_ad) {
            row += displayPct(v.current_ad);
        }
        row += '</td>' +
            '<td id="' + k + 'cost" class="accounting">' + v.displayCost + '</td>' +
            '</tr>'
        $('tbody').append(row);
    });
    window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
    window.localStorage.setItem('tree', $('#tree').val())
    window.localStorage.setItem('hero', $('#hero').val())
    window.localStorage.setItem('spell', $('#spell').val())
    window.localStorage.setItem('sword', $('#sword').val())
    window.localStorage.setItem('helmet', $('#helmet').val())
    window.localStorage.setItem('chest', $('#chest').val())
    window.localStorage.setItem('aura', $('#aura').val())
    window.localStorage.setItem('slash', $('#slash').val())
    window.localStorage.setItem('pet', $('#pet').val())
    window.localStorage.setItem('relic_factor', $('#relic_factor').val())
}

function regenerateTable() {
    $.each(artifacts, function(k,v) {
        $('#' + k).val(v.level);
	value = '';
        if('' != v.current_effect) {
            value = displayEffect(v.current_effect, v.type) + v.bonus;
        }
        $('#' + k + 'effect').empty().append(value);
        value = '';
        if('' != v.current_ad) {
            value = displayPct(v.current_ad);
        }
        $('#' + k + 'ad').empty().append(value);
        $('#' + k + 'cost').empty().append(v.displayCost);

    });
    window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
    window.localStorage.setItem('tree', $('#tree').val())
    window.localStorage.setItem('hero', $('#hero').val())
    window.localStorage.setItem('spell', $('#spell').val())
    window.localStorage.setItem('sword', $('#sword').val())
    window.localStorage.setItem('helmet', $('#helmet').val())
    window.localStorage.setItem('chest', $('#chest').val())
    window.localStorage.setItem('aura', $('#aura').val())
    window.localStorage.setItem('slash', $('#slash').val())
    window.localStorage.setItem('pet', $('#pet').val())
    window.localStorage.setItem('relic_factor', $('#relic_factor').val())
}

function updateTable() {
    $('td input').each(function(k,v) {
        artifacts[v.id].level = parseInt(v.value);
    });
    calculate(artifacts, true);
}

function adjustWeights() {
    gtag('event', 'Skill Tree', {
      'event_category': 'Skill Tree',
      'event_action': 'Set',
      'event_label': $('#tree').val(),
    });
    gtag('event', 'Hero Type', {
      'event_category': 'Hero Type',
      'event_action': 'Set',
      'event_label': $('#hero').val(),
    });
    gtag('event', 'Spell', {
      'event_category': 'Spell',
      'event_action': 'Set',
      'event_label': $('#spell').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Sword',
      'event_label': $('#sword').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Helmet',
      'event_label': $('#helmet').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Chest',
      'event_label': $('#chest').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Aura',
      'event_label': $('#aura').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Slash',
      'event_label': $('#slash').val(),
    });
    gtag('event', 'Equipment', {
      'event_category': 'Equipment',
      'event_action': 'Pet',
      'event_label': $('#pet').val(),
    });
    $.each(origWeights, function(k,v) {
        artifacts[k].rating = v.rating;
    });
    switch($('#tree').val()) {
        case 'knight':
            artifacts.dh.rating += 20;
            artifacts.hb.rating += 5;
            artifacts.aom.rating += 10;
            artifacts.foe.rating += 15;
            artifacts.bor.rating += 10;
            artifacts.ga.rating += 10;
            artifacts.os.rating += 10;
            artifacts.ss.rating += 15;
            artifacts.tms.rating += 10;
            break;
        case 'warlord':
            artifacts.hb.rating += 20;
            artifacts.coc.rating += 10;
            artifacts.pof.rating += 10;
            artifacts.a.rating += 10;
            artifacts.tac.rating += 10;
            artifacts.ie.rating += 15;
            artifacts.sor.rating += 10;
            artifacts.ig.rating += 10;
            artifacts.coe.rating += 10;
            artifacts.hos.rating += 10;
            break;
        case 'sorcerer':
            artifacts.dh.rating += 5;
            artifacts.is.rating += 10;
            artifacts.tm.rating += 15;
            artifacts.lp.rating += 15;
            artifacts.eoe.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.ig.rating += 5;
            artifacts.coe.rating += 5;
            artifacts.ss.rating += 15;
            artifacts.hos.rating += 5;
            artifacts.pt.rating += 15;
            artifacts.gfa.rating += 15;
            artifacts.ae.rating += 15;
            break;
        case 'rogue':
            artifacts.bop.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.sov.rating += 10;
            artifacts.hsw.rating += 5;
            artifacts.dr.rating += 5;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.foe.rating += 5;
            artifacts.ie.rating += 5;
            artifacts.eoe.rating += 5;
            artifacts.ig.rating += 5;
            artifacts.zc.rating += 15;
            artifacts.af.rating += 20;
            break;
    }
    switch($('#hero').val()) {
        case 'melee':
            artifacts.tsos.rating += 20;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            break;
    }
    switch($('#spell').val()) {
        case 'hs':
            artifacts.tm.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.coe.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.hos.rating += 10;
            artifacts.pt.rating += 15;
            break;
        case 'ds':
            artifacts.rt.rating += 15;
            artifacts.fs.rating += 15;
            artifacts.gok.rating += 15;
            artifacts.pt.rating += 15;
            break;
        case 'hom':
            artifacts.lp.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.pt.rating += 15;
            break;
        case 'fs':
            artifacts.bor.rating += 15;
            artifacts.ga.rating += 15;
            artifacts.os.rating += 15;
            artifacts.pt.rating += 15;
            break;
        case 'wc':
            artifacts.pof.rating += 15;
            artifacts.a.rating += 15;
            artifacts.tac.rating += 15;
            artifacts.pt.rating += 15;
            break;
        case 'sc':
            artifacts.eoe.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.pt.rating += 15;
            break;
    }
    switch($('#sword').val()) {
        case 'all':
            artifacts.dr.rating += 20;
            artifacts.hs.rating += 20;
            artifacts.af.rating += 10;
            break;
        case 'hero':
            artifacts.hb.rating += 20;
            artifacts.tsos.rating += 10;
            artifacts.fb.rating += 10;
            artifacts.cota.rating += 10;
            break;
        case 'crit':
            artifacts.aom.rating += 20;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.ss.rating += 10;
            break;
    }
    switch($('#helmet').val()) {
        case 'melee':
            artifacts.tsos.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'tap':
            artifacts.dh.rating += 20;
            artifacts.ss.rating += 20;
            artifacts.tms.rating += 10;
            break;
    }
    switch($('#chest').val()) {
        case 'all':
            artifacts.bop.rating += 20;
            artifacts.sov.rating += 10;
            artifacts.coc.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.eof.rating += 10;
            artifacts.dc.rating += 10;
            artifacts.gfa.rating += 10;
            artifacts.zc.rating += 10;
            break;
        case 'boss':
            artifacts.hs.rating += 20;
            break;
        case 'chest':
            artifacts.coc.rating += 20;
            artifacts.eof.rating += 20;
            break;
    }
    switch($('#aura').val()) {
        case 'multi':
            break;
        case 'chest':
            artifacts.coc.rating += 20;
            artifacts.eof.rating += 20;
            break;
        case 'crit':
            artifacts.aom.rating += 20;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.ss.rating += 10;
            break;
    }
    switch($('#slash').val()) {
        case 'pet':
            artifacts.foe.rating += 20;
            artifacts.dh.rating += 10;
            break;
        case 'clan':
            artifacts.ie.rating += 20;
            artifacts.dh.rating += 10;
            artifacts.ig.rating += 15;
            artifacts.hos.rating += 15;
            break;
        case 'sc':
            artifacts.eoe.rating += 20;
            artifacts.sg.rating += 10;
            artifacts.ho.rating += 10;
            artifacts.dh.rating += 10;
            artifacts.ig.rating += 15;
            artifacts.ss.rating += 15;
            break;
    }
    switch($('#pet').val()) {
        case 'all':
            artifacts.dr.rating += 20;
            artifacts.hs.rating += 20;
            artifacts.af.rating += 10;
            break;
        case 'hero':
            artifacts.hb.rating += 20;
            artifacts.tsos.rating += 10;
            artifacts.fb.rating += 10;
            artifacts.cota.rating += 10;
            break;
        case 'melee':
            artifacts.tsos.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'tap':
            artifacts.dh.rating += 20;
            artifacts.ss.rating += 20;
            artifacts.tms.rating += 10;
            break;
        case 'gold':
            artifacts.bop.rating += 20;
            artifacts.sov.rating += 10;
            artifacts.coc.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.eof.rating += 10;
            artifacts.dc.rating += 10;
            artifacts.coe.rating += 10;
            artifacts.gfa.rating += 10;
            artifacts.zc.rating += 10;
            break;
        case 'mana':
            artifacts.tm.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.rt.rating += 15;
            artifacts.fs.rating += 15;
            artifacts.gok.rating += 15;
            artifacts.lp.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.bor.rating += 15;
            artifacts.ga.rating += 15;
            artifacts.os.rating += 15;
            artifacts.pof.rating += 15;
            artifacts.a.rating += 15;
            artifacts.tac.rating += 15;
            artifacts.eoe.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.ig.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.ae.rating += 15;
            break;
    }
    calculate(artifacts, true);
}

function generateUpgrades() {
    window.localStorage.setItem('relic_factor', $('#relic_factor').val())
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
    }
    gtag('event', 'Upgrades', {
      'event_category': 'Upgrades',
      'event_action': 'Generate',
      'event_label': 'List',
      'event_value' : relics
    });
    upgrades = {};
    upgrade_cost = 0;
    temp_artifacts = $.extend(true, {}, artifacts);
    litmus = false;
    $.each(artifacts, function(k,v) {
      if(v.level > 0) { litmus = true; }
    });
    if(false == litmus) {
      $('#suggestions').empty().append('<li>You must have at least 1 artifact enabled to use this.</li>');
      return
    }
    do {
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
    } while(upgrade_cost <= relics);
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
    $.each(data, function(k,v) {
        data[k].efficiency = '';
        data[k].cost = '';
        data[k].displayCost = '';
        if(v.level > 0) {
	    current_ad = v.level * v.ad
	    current_effect = 1 + v.effect * Math.pow(v.level, 1 + (v.cexpo - 1) * Math.pow(Math.min(v.grate * v.level, v.gmax), v.gexpo));
            data[k].current_ad = current_ad;
            data[k].current_effect = current_effect
            if(data[k].max > v.level) {
                cost = Math.pow(v.level + 1, v.cexpo) * v.ccoef;
                data[k].cost= cost;
                data[k].displayCost = displayTruncated(cost);
		next_effect = 1 + v.effect * Math.pow(v.level + 1, 1 + (v.cexpo - 1) * Math.pow(Math.min(v.grate * (v.level + 1), v.gmax), v.gexpo));
                next_ad = (v.level + 1) * v.ad;
		data[k].efficiency = Math.abs(Math.log(Math.abs(((next_effect + next_ad) / (current_effect + current_ad)) / cost)));
            }
        } else {
            data[k].current_ad = '';
            data[k].current_effect = '';
        }
    });
    if(true === regenerate) {
        regenerateTable();
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
}

origWeights = jQuery.extend(true, {}, artifacts);
generateTable();
adjustWeights();
