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
		artifacts[k].rating = v.rating;
	});
	switch($('#build').val()) {
		case 'tap':
			artifacts.dh.rating += 1;
			artifacts.hb.rating += .5;
			artifacts.tsos.rating += .5;
			artifacts.fb.rating += .5;
			artifacts.cota.rating += .5;
			artifacts.ttt.rating += .5;
			artifacts.hh.rating += .25;
			artifacts.ss.rating += .5;
			artifacts.tr.rating += .5;
			break;
		case 'hero':
			artifacts.hb.rating += 1;
			artifacts.tsos.rating += 1;
			artifacts.fb.rating += 1;
			artifacts.cota.rating += 1;
			artifacts.ttt.rating += 1;
			artifacts.hh.rating += .5;
			artifacts.pof.rating += 1;
			break;
		case 'cs':
			artifacts.hb.rating += 1;
			artifacts.tsos.rating += 1;
			artifacts.fb.rating += 1;
			artifacts.cota.rating += 1;
			artifacts.coe.rating += .5;
			artifacts.ttt.rating += 1;
			artifacts.hh.rating += .5;
			artifacts.ie.rating += 1;
			artifacts.orc.rating += 1;
			artifacts.hos.rating += .5;
			artifacts.ig.rating += 1.5;
			artifacts.rt.rating += .5;
			artifacts.pof.rating += 1;
			artifacts.as.rating += .5;
			break;
		case 'hs':
			artifacts.dh.rating += 1;
			artifacts.coe.rating += 1;
			artifacts.ss.rating += .6;
			artifacts.hb.rating += .5;
			artifacts.tsos.rating += .5;
			artifacts.fb.rating += .5;
			artifacts.cota.rating += .5;
			artifacts.ttt.rating += .5;
			artifacts.hh.rating += .25;
			artifacts.hos.rating += 1;
			artifacts.ig.rating += 3;
			artifacts.tm.rating += 1;
			artifacts.rt.rating += .5;
			artifacts.bor.rating += 1;
			artifacts.pof.rating += .5;
			artifacts.tr.rating += .5;
			break;
		case 'sc':
			artifacts.dh.rating += .6;
			artifacts.ss.rating += .6;
			artifacts.hb.rating += .6;
			artifacts.tsos.rating += .6;
			artifacts.fb.rating += .6;
			artifacts.cota.rating += .6;
			artifacts.ttt.rating += .6;
			artifacts.hh.rating += .3;
			artifacts.orc.rating += 1;
			artifacts.ig.rating += 2.6;
			artifacts.rt.rating += .5;
			artifacts.bor.rating += .5;
			artifacts.pof.rating += .6;
			artifacts.eoe.rating += 1;
			artifacts.tr.rating += .5;
			artifacts.as.rating += .5;
			break;
		case 'pet':
			artifacts.foe.rating += 1;
			artifacts.dh.rating += 1;
			artifacts.tr.rating += .5;
			artifacts.coe.rating += 1;
			artifacts.hos.rating += 1;
			artifacts.hb.rating += .5;
			artifacts.tsos.rating += .5;
			artifacts.fb.rating += .5;
			artifacts.cota.rating += .5;
			artifacts.ttt.rating += .5;
			artifacts.hh.rating += .25;
			artifacts.orc.rating += 1;
			artifacts.ig.rating += 1.5;
			artifacts.rt.rating += .5;
			artifacts.pof.rating += 1;
			artifacts.as.rating += .5;
			break;
	}
	switch($('#hero').val()) {
		case 'melee':
			artifacts.tsos.rating += .5;
			break;
		case 'ranged':
			artifacts.fb.rating += .5;
			break;
		case 'spell':
			artifacts.cota.rating += .5;
			break;
	}
	switch($('#hero2').val()) {
		case 'ground':
			artifacts.ttt.rating += .5;
			break;
		case 'flying':
			artifacts.hh.rating += 1;
			break;
	}
	switch($('#chest').val()) {
		case 'boss':
			artifacts.hs.rating += .5;
			break;
		case 'chest':
			artifacts.coc.rating += .5;
			break;
	}
	switch($('#active').val()) {
		case 'offline':
			artifacts.zc.rating += .9;
			artifacts.af.rating += .9;
			break;
	}
	calculateAll(artifacts, true);
}
