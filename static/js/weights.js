function adjustWeights() {
	gtag('event', 'Dark Mode', {
		'event_category': 'Dark Mode',
		'event_action': 'Setting',
		'event_label': ($('#dark').prop('checked') ? 'Dark' : 'Light' ),
	});
	if($('#build').val()) {
		gtag('event', 'Build', {
			'event_category': 'Build',
			'event_action': 'Value',
			'event_label': $('#build').val(),
		});
	}
	if($('#hero').val()) {
		gtag('event', 'Hero Type', {
			'event_category': 'Hero Type',
			'event_action': 'Set',
			'event_label': $('#hero').val(),
		});
	}
	if($('#hero2').val()) {
		gtag('event', 'Hero Super Type', {
			'event_category': 'Hero Super Type',
			'event_action': 'Set',
			'event_label': $('#hero2').val(),
		});
	}
	if($('#chest').val()) {
		gtag('event', 'Equipment', {
			'event_category': 'Equipment',
			'event_action': 'Chest',
			'event_label': $('#chest').val(),
		});
	}
	if($('#active').val()) {
		gtag('event', 'Active', {
			'event_category': 'Active',
			'event_action': 'Set',
			'event_label': $('#active').val(),
		});
	}
	$.each(origWeights, function(k,v) {
		artifacts.data[k].rating = v.rating;
	});
	switch($('#build').val()) {
		case 'hero':
			break;
			artifacts.data.hb.rating += 1;
			artifacts.data.tsos.rating += 1;
			artifacts.data.fb.rating += 1;
			artifacts.data.cota.rating += 1;
			artifacts.data.ttt.rating += 1;
			artifacts.data.hh.rating += .5;
			artifacts.data.hos2.rating += 10;
			artifacts.data.ig.rating += 2;
			artifacts.data.pof.rating += 1;
		case 'tap':
			artifacts.data.dh.rating += 1;
			artifacts.data.ss.rating += 1;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.tsos.rating += .5;
			artifacts.data.fb.rating += .5;
			artifacts.data.cota.rating += .5;
			artifacts.data.ttt.rating += .5;
			artifacts.data.hh.rating += .25;
			artifacts.data.hos2.rating += 8;
			artifacts.data.ig.rating += 3.5;
			artifacts.data.rt.rating += 1;
			artifacts.data.bor.rating += 1;
			artifacts.data.pof.rating += .5;
			break;
		case 'pet':
			artifacts.data.coe.rating += .5;
			artifacts.data.dh.rating += 1;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.tsos.rating += .5;
			artifacts.data.fb.rating += .5;
			artifacts.data.cota.rating += .5;
			artifacts.data.ttt.rating += .5;
			artifacts.data.hh.rating += .25;
			artifacts.data.foe.rating += .5;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 8;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 2.5;
			artifacts.data.rt.rating += .5;
			break;
		case 'sc':
			artifacts.data.dh.rating += .6;
			artifacts.data.ss.rating += .6;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .6;
			artifacts.data.tsos.rating += .6;
			artifacts.data.fb.rating += .6;
			artifacts.data.cota.rating += .6;
			artifacts.data.ttt.rating += .6;
			artifacts.data.hh.rating += .3;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 9;
			artifacts.data.ig.rating += 2.6;
			artifacts.data.rt.rating += .5;
			artifacts.data.bor.rating += .5;
			artifacts.data.pof.rating += .6;
			artifacts.data.eoe.rating += 1;
			break;
		case 'hs':
			artifacts.data.coe.rating += .5;
			artifacts.data.dh.rating += 1;
			artifacts.data.ss.rating += .6;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.tsos.rating += .5;
			artifacts.data.fb.rating += .5;
			artifacts.data.cota.rating += .5;
			artifacts.data.ttt.rating += .5;
			artifacts.data.hh.rating += .25;
			artifacts.data.hos2.rating += 8.5;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 3;
			artifacts.data.tm.rating += 3;
			artifacts.data.rt.rating += .5;
			artifacts.data.bor.rating += 1;
			artifacts.data.pof.rating += .5;
			break;
		case 'cs':
			artifacts.data.coe.rating += .5;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += 1;
			artifacts.data.tsos.rating += 1;
			artifacts.data.fb.rating += 1;
			artifacts.data.cota.rating += 1;
			artifacts.data.ttt.rating += 1;
			artifacts.data.hh.rating += .5;
			artifacts.data.ie.rating += 1;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 10.5;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 2.5;
			artifacts.data.rt.rating += .5;
			artifacts.data.pof.rating += 1;
			break;
	}
	switch($('#hero').val()) {
		case 'melee':
			artifacts.data.tsos.rating += .5;
			break;
		case 'ranged':
			artifacts.data.fb.rating += .5;
			break;
		case 'spell':
			artifacts.data.cota.rating += .5;
			break;
	}
	switch($('#hero2').val()) {
		case 'ground':
			artifacts.data.ttt.rating += .5;
			break;
		case 'flying':
			artifacts.data.hh.rating += 1;
			break;
	}
	switch($('#chest').val()) {
		case 'boss':
			artifacts.data.hs.rating += .5;
			artifacts.data.hs2.rating += .5;
			break;
		case 'chest':
			artifacts.data.coc.rating += .5;
			break;
	}
	switch($('#active').val()) {
		case 'offline':
			artifacts.data.zc.rating += 1;
			artifacts.data.af.rating += 1;
			break;
		case 'online':
			artifacts.data.coc.rating += .5;
			break;
	}
	artifacts = calculateAll(artifacts, true);
}
