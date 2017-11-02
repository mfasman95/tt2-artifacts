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
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
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
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;          
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
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;          
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
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
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
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
           break;
        case 'clan':
            artifacts.ie.rating += 20;
            artifacts.dh.rating += 10;
            artifacts.ig.rating += 15;
            artifacts.hos.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
            break;
        case 'sc':
            artifacts.eoe.rating += 20;
            artifacts.sg.rating += 10;
            artifacts.ho.rating += 10;
            artifacts.dh.rating += 10;
            artifacts.ig.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;          
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
             artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
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


