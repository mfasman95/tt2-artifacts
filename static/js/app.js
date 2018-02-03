var winner_e = '';
var winner_n = '';
var winner_value = 0;
var winner_e100 = '';
var winner_n100 = '';
var winner_value100 = 0;

function toggleDark() {
	$('body').removeClass('dark');
	if($('#dark').prop('checked') == true) {
		$('body').addClass('dark');
		window.localStorage.setItem('dark', 1);
	} else {
		window.localStorage.setItem('dark', 0);
	}
}

function ocdOCD() {
	if($('#ocd').prop('checked') == true) {
		window.localStorage.setItem('ocd', 1);
	} else {
		window.localStorage.setItem('ocd', 0);
	}
}

function generateArtifacts() {
	$('#artifacts').empty();
	$.each(artifacts.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		var div = '<div class="artifact' + (v.active == 1 ? '' : ' ignore') + '" id="'+ k + 'div"><input type="checkbox" id="' + k + 'active"' + (v.active == 1 ? ' checked="checked"' : '') + ' onchange="updateActive(\'' + k + '\');" tabindex="-1" /><label><input id="' + k + '" value="' + v.level + '" type="tel" onchange="updateArtifact(\'' + k + '\')" />' + v.name + '</label><br /><span id="' + k + 'effect">';
		div += '</span><span id="' + k + 'ad">';
		div += '</span><span id="' + k + 'cost">';
		div += '</span></span><span id="' + k + 'weff">';
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
	window.localStorage.setItem('bos_type', $('#bos_type').val());
	if($('#ocd').prop('checked') == true) {
		window.localStorage.setItem('ocd', 1);
	} else {
		window.localStorage.setItem('ocd', 0);
	}
	adjustWeights();
}

function updateActive(k) {
	if($('#' + k + 'active').is(':checked')) {
		artifacts.data[k].active = 1;
		$('#' + k + 'div').removeClass('ignore');
	} else {
		artifacts.data[k].active = 0;
		$('#' + k + 'div').addClass('ignore');
	}
	artifacts = calculate(artifacts, k, true, true);
}

function checkAll() {
	$.each(artifacts.data, function(k,v) {
		$('#' + k + 'active').prop('checked', true);
		artifacts.data[k].active = 1;
		$('#' + k + 'div').removeClass('ignore');
	});
	artifacts = calculateAll(artifacts, true);
}

function regenerateArtifacts() {
	$.each(artifacts.data, function(k,v) {
		if(isNaN(v.level)) {
			v.level = 0;
		}
		$('#' + k).val(v.level);
		var value = '';
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
		if(-1 != v.efficiency) {
			value = v.rating.toFixed(2).replace(/\.?0+$/, '') + ' Exponent &#x2022; ' + v.efficiency.toExponential(8) + ' Efficiency';
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
	window.localStorage.setItem('bos_type', $('#bos_type').val());
	if($('#ocd').prop('checked') == true) {
		window.localStorage.setItem('ocd', 1);
	} else {
		window.localStorage.setItem('ocd', 0);
	}
}

function updateArtifact(k) {
	artifacts.data[k].level = parseInt($('#' + k).val());
	artifacts.totalAD = calculateTotalAD(artifacts.data, true);
	artifacts = calculate(artifacts, k, true, true);
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
	var l100 = false;
	window.localStorage.setItem('relic_factor', $('#relic_factor').val())
	window.localStorage.setItem('forcebos', $('#forcebos').val());
	window.localStorage.setItem('bos_type', $('#bos_type').val());
	if($('#ocd').prop('checked') == true) {
		window.localStorage.setItem('ocd', 1);
		l100 = true;
	} else {
		window.localStorage.setItem('ocd', 0);
	}
	if((false == l100 && winner_n != '') || (true == l100 && winner_n100 != '')) {
		$('#new_artifact').empty().append('<em>NOTE: You would be better off saving up for a new artifact.</em>');
	}
	var forceBOS = parseInt($('#forcebos').val());
	var relics = new Decimal(('' == $('#relics').val() ? 0 : $('#relics').val()) + '.' + ('' == $('#relics_decimal').val() ? 0 : $('#relics_decimal').val()));
	switch($('#relic_factor').val()) {
		case '_':
			relics = relics.toNumber();
			break;

		case 'K':
			relics = relics.mul(1000).toNumber();
			break;

		case 'M':
			relics = relics.mul(1000000).toNumber();
			break;

		case 'B':
			relics = relics.mul(1000000000).toNumber();
			break;

		case 'T':
			relics = relics.mul(1000000000000).toNumber();
			break;
		case 'e13':
			relics = relics.mul(10000000000000).toNumber();
			break;
		case 'e14':
			relics = relics.mul(100000000000000).toNumber();
			break;
		case 'e15':
			relics = relics.mul(1000000000000000).toNumber();
			break;
		case 'e16':
			relics = relics.mul(10000000000000000).toNumber();
			break;
		case 'e17':
			relics = relics.mul(100000000000000000).toNumber();
			break;
		case 'e18':
			relics = relics.mul(1000000000000000000).toNumber();
			break;
	}
	upgrades = {};
	var temp_artifacts = $.extend(true, {}, artifacts);
	var litmus = false;
	$.each(temp_artifacts.data, function(k,v) {
		if(v.level > 0) { litmus = true; }
	});
	if(false == litmus) {
		$('#suggestions').empty().append('<li>You must have at least 1 artifact enabled to use this.</li>');
		return
	}
	while(forceBOS > 0 && $('#ocd').prop('checked') == false) {
		if($('#bos_type').val() == 'level') {
			if(relics >= temp_artifacts.data['bos'].cost) {
				forceBOS--;
				if(undefined == upgrades['bos']) {
					upgrades['bos'] = 1;
				} else {
					upgrades['bos']++;
				}
				relics -= temp_artifacts.data['bos'].cost;
				temp_artifacts.data['bos'].level++;
				temp_artifacts = calculate(temp_artifacts, 'bos', false, false);
			} else {
				forceBOS = 0;
			}
		} else {
			var bos_pct = forceBOS/100;
			var bos_relics = relics * bos_pct;
			while(true) {
				if(bos_relics >= temp_artifacts.data['bos'].cost) {
					bos_relics -= temp_artifacts.data['bos'].cost;
					if(undefined == upgrades['bos']) {
						upgrades['bos'] = 1;
					} else {
						upgrades['bos']++;
					}
					relics -= temp_artifacts.data['bos'].cost;
					temp_artifacts.data['bos'].level++;
					temp_artifacts = calculate(temp_artifacts, 'bos', false, false);
				} else if(relics >= temp_artifacts.data['bos'].cost) {
					if(undefined == upgrades['bos']) {
						upgrades['bos'] = 1;
					} else {
						upgrades['bos']++;
					}
					relics -= temp_artifacts.data['bos'].cost;
					temp_artifacts.data['bos'].level++;
					temp_artifacts = calculate(temp_artifacts, 'bos', false, false);
					break;
				} else {
					break;
				}
			}
			break;
		}
	}
	while(true) {
		if(true == l100) {
			if(relics >= temp_artifacts.data[winner_e100].cost100) {
				if(undefined == upgrades[winner_e100]) {
					upgrades[winner_e100] = temp_artifacts.data[winner_e100].jump100;
				} else {
					upgrades[winner_e] += temp_artifacts.data[winner_e100].jump100;
				}
				relics -= temp_artifacts.data[winner_e100].cost100;
				temp_artifacts.data[winner_e100].level += temp_artifacts.data[winner_e100].jump100;
				temp_artifacts = calculate(temp_artifacts, winner_e100, false, false);
			} else {
				break;
			}
		} else {
			if(relics >= temp_artifacts.data[winner_e].cost) {
				if(undefined == upgrades[winner_e]) {
					upgrades[winner_e] = 1;
				} else {
					upgrades[winner_e]++;
				}
				relics -= temp_artifacts.data[winner_e].cost;
				temp_artifacts.data[winner_e].level++;
				temp_artifacts = calculate(temp_artifacts, winner_e, false, false);
			} else {
				break;
			}
		}
	}
	var suggestions = '';
	var litmus = false;
	$.each(upgrades, function(k,v) {
		litmus = true;
	});
	if(false == litmus) {
		$('#suggestions').empty().append('<li>You cannot afford to make the next best upgrade(s). Please try again when you have more relics. Also, if you have the OCD mode on, you might need to shut it off to see results.</li>');
		return
	}
	$.each(artifacts.data, function(k,v) {
		if(k in upgrades) {
			suggestions += '<li>' + v.name + '&#x00A0;' + v.level + '&#x00A0;=>&#x00A0;' + temp_artifacts.data[k].level + '&#x00A0;(+' + upgrades[k] + ') <span class="light">[' + displayEffect(artifacts.data[k].current_effect, artifacts.data[k].type) + '&#x00A0;=>&#x00A0;' + displayEffect(temp_artifacts.data[k].current_effect, artifacts.data[k].type) + '&#x00A0;effect&#x00A0;|&#x00A0;' + displayPct(artifacts.data[k].current_ad) + '&#x00A0;=>&#x00A0;' + displayPct(temp_artifacts.data[k].current_ad) + '&#x00A0;AD]</span></li>';
		}
	});
	$('#suggestions').empty().append(suggestions);
	$('#accept').empty().append('<input type="submit" value="Complete" onclick="acceptSuggestions();" />');
}

function acceptSuggestions() {
	gtag('event', 'Upgrades', {
		'event_category': 'Upgrades',
		'event_action': 'Accept',
		'event_label': 'List',
	});
	$.each(upgrades, function(k,v) {
		artifacts.data[k].level += v;
	});
	artifacts.totalAD = calculateTotalAD(artifacts.data, true);
	$('#new_artifact').empty();
	$('#accept').empty();
	$('#suggestions').empty();
	$('#relics').val('');
	$('#relics_decimal').val('');
	artifacts = calculateAll(artifacts, true);
}

function oldEff(data, k, v) {
	var current_ad = v.level * v.ad;
	var current_effect = 1 + v.effect * Math.pow(v.level, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.level, v.gmax)), v.gexpo));
	data.data[k].current_ad = current_ad;
	data.data[k].current_effect = current_effect
	if(v.max == -1 || v.max > v.level) {
		var cost = Math.pow(v.level + 1, v.cexpo) * v.ccoef;
		data.data[k].cost= cost;
		data.data[k].displayCost = displayTruncated(cost);
		var next_effect = 1 + v.effect * Math.pow(v.level + 1, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * (v.level + 1), v.gmax)), v.gexpo));
		var effect_diff = next_effect/current_effect;
		var effect_eff = Math.pow(effect_diff, v.rating);
		var ad_change = (((v.level + 1) * v.ad) - current_ad);
		var ad_eff = 1 + (ad_change/data.totalAD);
		var eff = Math.abs(((effect_eff * ad_eff) - 1)/cost);
		data.data[k].efficiency = eff;
		var i = v.level;
		var j = (v.max == -1 ? (100 - (v.level % 100)) : v.max);
		data.data[k].jump100 = j;
		var cost100 = 0;
		while(i <= j + v.level) {
			cost100 += Math.pow(i++, v.cexpo) * v.ccoef;
		}
		data.data[k].cost100 = cost100;
		next_effect = 1 + v.effect * Math.pow(v.level + j, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * (v.level + j), v.gmax)), v.gexpo));
		effect_diff = next_effect/current_effect;
		effect_eff = Math.pow(effect_diff, v.rating);
		ad_change = (((v.level + j) * v.ad) - current_ad);
		ad_eff = 1 + (ad_change/data.totalAD);
		eff = Math.abs(((effect_eff * ad_eff) - 1)/cost100);
		data.data[k].efficiency100 = eff;
	}
	return(data);
}

function newEff(data, k, v, avglvl, cost) {
	data.data[k].current_ad = '';
	data.data[k].current_effect = '';
	var i = 1;
	var j = (v.max == -1 || v.max > avglvl ? avglvl : v.max);
	while(i <= j) {
		cost += Math.pow(i++, v.cexpo) * v.ccoef;
	}
	if(v.max == -1 || v.max > avglvl) {
		var next_effect = 1 + v.effect * Math.pow(avglvl, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * avglvl, v.gmax)), v.gexpo));
	} else  {
		var next_effect = 1 + v.effect * Math.pow(v.max, Math.pow((1 + (v.cexpo - 1) * Math.min(v.grate * v.max, v.gmax)), v.gexpo));
	}
	var effect_eff = Math.pow(next_effect, v.rating);
	var ad_eff = 1 + ((avglvl * v.ad)/data.totalAD);
	var eff = Math.abs(((effect_eff * ad_eff) - 1)/cost);
	data.data[k].efficiency = eff;
	data.data[k].efficiency100 = eff;
	return(data)
}

function calculateTotalAD(data, update) {
	var total = 0;
	$.each(data, function(k,v) {
		total += v.level * v.ad;
	});
	if(true == update) {
		$('#adsanity').text(displayPct(total * artifacts.data.hsw.current_effect));
	}
	return(total);
}

function calculate(data, k, regenerate, pinch) {
	var next_artifact = countArtifacts(artifacts.data) + 1;
	var next_artifact_cost = artifact_costs[next_artifact];
	var average_level = determineAverage(artifacts.data);
	var v = data.data[k];
	data.data[k].efficiency = -1;
	data.data[k].cost = '';
	data.data[k].displayCost = '';
	data.data[k].efficiency100 = -1;
	data.data[k].cost100 = '';
	data.data[k].jump100 = 0;
	if(v.level > 0 && v.active == 1) {
		data = oldEff(data, k, v);
	} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1 && true === pinch) {
		data = newEff(data, k, v, average_level, next_artifact_cost);
	} else {
		data.data[k].current_ad = '';
		data.data[k].current_effect = '';
	}
	winner_e = ''
	winner_e100 = ''
	var temp_winner_n = ''
	var temp_winner_n100 = ''
	winner_value = 0;
	winner_value100 = 0;
	$.each(data.data, function(k,v) {
		if(-1 != v.efficiency && v.efficiency > winner_value) {
			if(v.level > 0 && v.active == 1) {
				winner_e = k;
				winner_value = v.efficiency;
			} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1 && true === pinch) {
				temp_winner_n = k;
			}
		}
		if(-1 != v.efficiency100 && v.efficiency100 > winner_value100) {
			if(v.level > 0 && v.active == 1) {
				winner_e100 = k;
				winner_value100 = v.efficiency100;
			} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1 && true === pinch) {
				temp_winner_n100 = k;
			}
		}
	});
	if(true === regenerate) {
		regenerateArtifacts();
		winner_n = temp_winner_n;
		winner_n100 = temp_winner_n100;
	}
	data.totalAD = calculateTotalAD(data.data, regenerate);
	return(data);
}

function calculateAll(data, regenerate) {
	winner_e = ''
	winner_e100 = ''
	var temp_winner_n = ''
	var temp_winner_n100 = ''
	winner_value = 0;
	winner_value100 = 0;
	var next_artifact = countArtifacts(artifacts.data) + 1;
	var next_artifact_cost = artifact_costs[next_artifact];
	var average_level = determineAverage(artifacts.data);
	$.each(data.data, function(k,v) {
		data.data[k].efficiency = -1;
		data.data[k].cost = '';
		data.data[k].displayCost = '';
		if(v.level > 0 && v.active == 1) {
			data = oldEff(data, k, v);
			if(-1 != data.data[k].efficiency && data.data[k].efficiency > winner_value) {
				winner_e = k;
				temp_winner_n = '';
				winner_value = data.data[k].efficiency;
			}
			if(-1 != data.data[k].efficiency100 && data.data[k].efficiency100 > winner_value100) {
				winner_e100 = k;
				temp_winner_n100 = '';
				winner_value100 = data.data[k].efficiency100;
			}
		} else if(v.level == 0 && next_artifact_cost != -1 && v.active == 1) {
			data = newEff(data, k, v, average_level, next_artifact_cost);
			if(-1 != data.data[k].efficiency && data.data[k].efficiency > winner_value) {
				temp_winner_n = k;
			}
			if(-1 != data.data[k].efficiency100 && data.data[k].efficiency100 > winner_value100) {
				temp_winner_n100 = k;
			}
		} else {
			data.data[k].current_ad = '';
			data.data[k].current_effect = '';
		}
	});
	if(true === regenerate) {
		regenerateArtifacts();
		winner_n = temp_winner_n;
		winner_n100 = temp_winner_n100;
	}
	data.totalAD = calculateTotalAD(data.data, regenerate);
	return(data)
}

function displayPct(value) {
	value = displayTruncated(value * 100);
	return(value + '%');
}

function displayTruncated(value) {
	if(value > 999999999999999999) {
		value = (value / 1000000000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e18/ab';
	} else if(value > 99999999999999999) {
		value = (value / 100000000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e17';
	} else if(value > 9999999999999999) {
		value = (value / 10000000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e16';
	} else if(value > 999999999999999) {
		value = (value / 1000000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e15/aa';
	} else if(value > 99999999999999) {
		value = (value / 100000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e14';
	} else if(value > 9999999999999) {
		value = (value / 10000000000000).toFixed(3).replace(/\.?0+$/, '');
		value += 'e13';
	} else if(value > 999999999999) {
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
	var localArtifacts = JSON.parse(window.localStorage.getItem('artifacts'));
	if(null != localArtifacts && 'undefined' == typeof localArtifacts.data) {
		localArtifacts.data = jQuery.extend(true, {}, localArtifacts);
	}
	if(null != localArtifacts && 'undefined' != typeof localArtifacts.data) {
		$.each(localArtifacts.data, function(k, v) {
			if(undefined != artifacts.data[k]) {
				artifacts.data[k].level = v.level;
				artifacts.data[k].active = v.active;
			}
		});
	}
	artifacts.totalAD = calculateTotalAD(artifacts.data);
	$('#build').val(window.localStorage.getItem('build'));
	$('#hero').val(window.localStorage.getItem('hero'));
	$('#hero2').val(window.localStorage.getItem('hero2'));
	$('#chest').val(window.localStorage.getItem('chest'));
	$('#active').val(window.localStorage.getItem('active'));
	$('#relic_factor').val(window.localStorage.getItem('relic_factor'));
	$('#forcebos').val(window.localStorage.getItem('forcebos'));
	$('#bos_type').val(window.localStorage.getItem('bos_type'));
	if(window.localStorage.getItem('dark') == "1") {
		$('#dark').prop('checked', true);
	}
	if(window.localStorage.getItem('ocd') == "1") {
		$('#ocd').prop('checked', true);
	}
	toggleDark();
}

var origWeights = jQuery.extend(true, {}, artifacts.data);
generateArtifacts();
