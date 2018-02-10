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
	var hreduct = 0;
	switch($('#build').val()) {
		case 'hero':
			artifacts.data.hb.rating += 1;
			artifacts.data.hos2.rating += 6;
			artifacts.data.ig.rating += 1.75;
			artifacts.data.pof.rating += 1;
			artifacts.data.hom.rating += 1;
			artifacts.data.roc.rating += 2.82;
			hreduct = 1;
			break;
		case 'tap':
			artifacts.data.dh.rating += 1;
			artifacts.data.ss.rating += 1;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.hos2.rating += 6;
			artifacts.data.ig.rating += 3.25;
			artifacts.data.rt.rating += 1;
			artifacts.data.bor.rating += 1;
			artifacts.data.pof.rating += .5;
			artifacts.data.hom.rating += 1;
			artifacts.data.roc.rating += 2.82;
			hreduct = .5;
			break;
		case 'pet':
			artifacts.data.coe.rating += .41;
			artifacts.data.dh.rating += 1;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.foe.rating += .5;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 6;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 2.25;
			artifacts.data.rt.rating += .5;
			artifacts.data.as.rating += 1;
			artifacts.data.hom.rating += .5;
			artifacts.data.roc.rating += 3.32;
			hreduct = .5;
			break;
		case 'sc':
			artifacts.data.coe.rating += .41;
			artifacts.data.dh.rating += .67;
			artifacts.data.ss.rating += .67;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .67;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 6;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 3.42;
			artifacts.data.rt.rating += .5;
			artifacts.data.bor.rating += .5;
			artifacts.data.pof.rating += .67;
			artifacts.data.eoe.rating += 1;
			artifacts.data.as.rating += 1;
			artifacts.data.hom.rating += .67;
			artifacts.data.roc.rating += 3.49;
			hreduct = .67;
			break;
		case 'hs':
			artifacts.data.coe.rating += .41;
			artifacts.data.dh.rating += 1;
			artifacts.data.ss.rating += .67;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += .5;
			artifacts.data.hos2.rating += 7;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 3.92;
			artifacts.data.tm.rating += 3;
			artifacts.data.rt.rating += .5;
			artifacts.data.bor.rating += 1;
			artifacts.data.pof.rating += .5;
			artifacts.data.hom.rating += .67;
			artifacts.data.roc.rating += 2.49;
			hreduct = .5;
			break;
		case 'cs':
			artifacts.data.coe.rating += .41;
			artifacts.data.tr.rating += 1;
			artifacts.data.hb.rating += 1;
			artifacts.data.ie.rating += 1;
			artifacts.data.orc.rating += 1;
			artifacts.data.hos2.rating += 7;
			artifacts.data.hos.rating += .5;
			artifacts.data.ig.rating += 2.25;
			artifacts.data.rt.rating += .5;
			artifacts.data.pof.rating += 1;
			artifacts.data.as.rating += 1;
			artifacts.data.hom.rating += 1;
			artifacts.data.roc.rating += 3.82;
			hreduct = 1;
			break;
	}
	switch($('#hero').val()) {
		case 'melee':
			artifacts.data.tsos.rating += hreduct;
			break;
		case 'ranged':
			artifacts.data.fb.rating += hreduct;
			break;
		case 'spell':
			artifacts.data.cota.rating += hreduct;
			break;
	}
	switch($('#hero2').val()) {
		case 'ground':
			artifacts.data.ttt.rating += hreduct;
			break;
		case 'flying':
			artifacts.data.hh.rating += hreduct;
			break;
	}
	switch($('#active').val()) {
		case 'offline':
			artifacts.data.zc.rating += .82;
			artifacts.data.af.rating += 1;
			break;
		case 'online':
			artifacts.data.coc.rating += .41;
			artifacts.data.gfa.rating += .41;
			break;
	}
	var i = 40;
	$.each(artifacts.data, function(k,v) {
		if(v.sort <= i && k != 'bos') {
			artifacts.data.bos.rating += v.rating;
		}
	});
	artifacts = calculateAll(artifacts, true);
}
