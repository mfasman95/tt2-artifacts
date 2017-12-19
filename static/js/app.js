function toggleDark() {
	$('body').removeClass('dark');
	if($('#dark').prop('checked') == true) {
		$('body').addClass('dark');
		window.localStorage.setItem('dark', 1);
	} else {
		window.localStorage.setItem('dark', 0);
	}
}

function generateArtifacts() {
	$('#artifacts').empty();
	$.each(artifacts, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		div = '<div class="artifact' + (v.active == 1 ? '' : ' ignore') + '" id="'+ k + 'div"><input type="checkbox" id="' + k + 'active"' + (v.active == 1 ? ' checked="checked"' : '') + ' onchange="updateActive(\'' + k + '\');" /><label><input id="' + k + '" value="' + v.level + '" type="tel" onchange="updateArtifacts()" />' + v.name + '</label><br /><span id="' + k + 'effect">';
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
		div += '</span></span><span id="' + k + 'weff">';
		if('' != v.efficiency) {
			div += v.rating + ' Weight &#x2022; ' + v.efficiency.toExponential(8) + ' Efficiency';
		}
		div += '</span></div>'
		$('#artifacts').append(div);
	});
	window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
	window.localStorage.setItem('build', $('#build').val());
	window.localStorage.setItem('hero', $('#hero').val());
	window.localStorage.setItem('hero2', $('#hero2').val());
	window.localStorage.setItem('chest', $('#chest').val());
	window.localStorage.setItem('active', $('#active').val());
	window.localStorage.setItem('relic_factor', $('#relic_factor').val());
	window.localStorage.setItem('forcebos', $('#forcebos').val());
	adjustWeights();
}

function updateActive(k) {
	if($('#' + k + 'active').is(':checked')) {
		artifacts[k].active = 1;
		$('#' + k + 'div').removeClass('ignore');
	} else {
		artifacts[k].active = 0;
		$('#' + k + 'div').addClass('ignore');
	}
	calculate(artifacts, true);
}

function checkAll() {
	$.each(artifacts, function(k,v) {
		$('#' + k + 'active').prop('checked', true);
		artifacts[k].active = 1;
		$('#' + k + 'div').removeClass('ignore');
	});
	calculate(artifacts, true);
}

function regenerateArtifacts() {
	$.each(artifacts, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
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
			value = v.rating + ' Weight &#x2022; ' + v.efficiency.toExponential(8) + ' Efficiency';
		}
		$('#' + k + 'weff').empty().append(value);
	});
	window.localStorage.setItem('artifacts', JSON.stringify(artifacts));
	window.localStorage.setItem('build', $('#build').val());
	window.localStorage.setItem('hero', $('#hero').val());
	window.localStorage.setItem('hero2', $('#hero2').val());
	window.localStorage.setItem('chest', $('#chest').val());
	window.localStorage.setItem('active', $('#active').val());
	window.localStorage.setItem('relic_factor', $('#relic_factor').val());
	window.localStorage.setItem('forcebos', $('#forcebos').val());
}

function updateArtifacts() {
	$('.artifact input[type="tel"]').each(function(k,v) {
		artifacts[v.id].level = parseInt(v.value);
	});
	calculate(artifacts, true);
}

function countArtifacts(data) {
	var i = 0;
	$.each(data, function(k,v) {
		if(v.level > 0) {
			i++;
		}
	});
	return(i);
}

function determineAverage(data) {
	var i = countArtifacts(data);
	var x = 0;
	var y = 0;
	$.each(data, function(k,v) {
		if(v.level > 0) {
			x += v.level;
		}
	});
	if(i > 0 && x > 0) {
		y = x / i;
	}
	return(y);
}

function generateUpgrades() {
	$('#new_artifact').empty();
	window.localStorage.setItem('relic_factor', $('#relic_factor').val())
	window.localStorage.setItem('forcebos', $('#forcebos').val());
	new_artifact = determineWinner(artifacts, true);
	new_artifact_litmus = false;
	if(false != new_artifact && artifacts[new_artifact].level < 1) {
		new_artifact_litmus = true;
//	} else {
//		$.each(artifacts, function(k,v) {
//			if(v.level < 1 && v.active == 1 && v.rating >= 5) {
//				new_artifact_litmus = true;
//			}
//		});
	}
	if(new_artifact_litmus === true) {
		$('#new_artifact').empty().append('<em>NOTE: You would be better off saving up for a new artifact.</em>');
	}
	forceBOS = parseInt($('#forcebos').val());
	relics = parseFloat($('#relics').val() + '.' + $('#relics_decimal').val());
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
		winner = determineWinner(temp_artifacts, false);
		if(winner === false) {
			console.log('false winner');
			break;
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
			suggestions += '<li>' + v.name + '&#x00A0;' + v.level + '&#x00A0;=>&#x00A0;' + temp_artifacts[k].level + '&#x00A0;(+' + upgrades[k] + ') <span class="light">[' + displayEffect(artifacts[k].current_effect, artifacts[k].type) + '&#x00A0;=>&#x00A0;' + displayEffect(temp_artifacts[k].current_effect, artifacts[k].type) + '&#x00A0;effect&#x00A0;|&#x00A0;' + displayPct(artifacts[k].current_ad) + '&#x00A0;=>&#x00A0;' + displayPct(temp_artifacts[k].current_ad) + '&#x00A0;AD]</span></li>';
		}
	});
	$('#suggestions').empty().append(suggestions);
	$('#accept').empty().append('<input type="submit" value="Complete" onclick="acceptSuggestions();" />');
}

function determineWinner(data, initial) {
	winner = false;
	litmus = false;
	$.each(data, function(k,v) {
		if('' !== v.efficiency && v.active == 1) {
			if(initial === false && v.level < 1) {
				return true;
			}
			if(winner === false) {
				winner = k;
				litmus = v.efficiency;
			} else if(litmus < v.efficiency || (initial === false && v.max > 0)) {
				console.log(k);
				console.log(v.name);
				console.log(litmus);
				console.log(v.efficiency);
				console.log(v.max);
				console.log(litmus < v.efficiency);
				console.log('=-=-=-=-=-=');
				winner = k;
				if(v.max > 0) {
					return false;
				} else {
					litmus = v.efficiency;
				}
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
	$('#new_artifact').empty();
	$('#accept').empty();
	$('#suggestions').empty();
	$('#relics').val('');
	$('#relics_decimal').val('');
	calculate(artifacts, true);
}

function calculate(data, regenerate) {
	next_artifact = countArtifacts(artifacts) + 1;
	next_artifact_cost = artifact_costs[next_artifact];
	average_level = determineAverage(artifacts);
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
			current_effect = 1 + v.effect * Math.pow(v.level, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.level, v.gmax)), v.gexpo));
			data[k].current_ad = current_ad;
			data[k].current_effect = current_effect
			if(v.max == -1 || v.max > v.level) {
				cost = Math.pow(v.level + 1, v.cexpo) * v.ccoef;
				data[k].cost= cost;
				data[k].displayCost = displayTruncated(cost);
				next_effect = 1 + v.effect * Math.pow(v.level + 1, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * (v.level + 1), v.gmax)), v.gexpo));
				next_ad_jump = ((v.level + 1) * v.ad) - (v.level * v.ad);
				effect_eff = ((next_effect - current_effect) ^ v.rating)/cost;
				ad_eff = next_ad_jump/cost;
				data[k].efficiency = effect_eff + ad_eff;
			}
		} else if(v.level == 0 && next_artifact_cost != -1) {
			data[k].current_ad = '';
			data[k].current_effect = '';
			i = 1;
			cost = 0;
			if(v.max == -1 || v.max > average_level) {
				next_effect = 1 + v.effect * Math.pow(average_level, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * average_level, v.gmax)), v.gexpo));
				while(i < average_level) { 
					cost += Math.pow(i++ + 1, v.cexpo) * v.ccoef;
				}
			} else  {
				next_effect = 1 + v.effect * Math.pow(v.max, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.max, v.gmax)), v.gexpo));
				while(i < v.max) { 
					cost += Math.pow(i++ + 1, v.cexpo) * v.ccoef;
				}
			}
			next_ad_jump = average_level * v.ad;
			effect_eff = (next_effect ^ v.rating)/(next_artifact_cost + cost);
			ad_eff = next_ad_jump/(next_artifact_cost + cost);
			data[k].efficiency = effect_eff + ad_eff;
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
		if(undefined != artifacts[k]) {
			artifacts[k].level = v.level;
			artifacts[k].active = v.active;
		}
	});
	$('#build').val(window.localStorage.getItem('build'));
	$('#hero').val(window.localStorage.getItem('hero'));
	$('#hero2').val(window.localStorage.getItem('hero2'));
	$('#chest').val(window.localStorage.getItem('chest'));
	$('#active').val(window.localStorage.getItem('active'));
	$('#relic_factor').val(window.localStorage.getItem('relic_factor'));
	$('#forcebos').val(window.localStorage.getItem('forcebos'));
	if(window.localStorage.getItem('dark') == "1") {
		$('#dark').prop('checked', true);
	}
	toggleDark();
}

origWeights = jQuery.extend(true, {}, artifacts);
generateArtifacts();
