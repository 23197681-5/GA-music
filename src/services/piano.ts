export default class piano {
  music: any = {
    122: { id: "D-0", note: "D", sharp: false, octave: 0, keyCodeNum: 122 },
    120: {
      id: "D-sharp-0",
      note: "D#",
      sharp: true,
      octave: 0,
      keyCodeNum: 120
    },
    99: { id: "E-1", note: "E", sharp: false, octave: 1, keyCodeNum: 99 },
    118: { id: "F-1", note: "F", sharp: false, octave: 1, keyCodeNum: 118 },
    98: {
      id: "F-sharp-1",
      note: "F#",
      sharp: true,
      octave: 1,
      keyCodeNum: 98
    },
    110: { id: "G-1", note: "G", sharp: false, octave: 1, keyCodeNum: 110 },
    109: {
      id: "G-sharp-1",
      note: "G#",
      sharp: true,
      octave: 1,
      keyCodeNum: 109
    },
    44: { id: "A-1", note: "A", sharp: false, octave: 1, keyCodeNum: 44 },
    46: {
      id: "A-sharp-1",
      note: "A#",
      sharp: true,
      octave: 1,
      keyCodeNum: 46
    },
    97: { id: "B-1", note: "B", sharp: false, octave: 1, keyCodeNum: 97 },
    115: { id: "C-1", note: "C", sharp: false, octave: 1, keyCodeNum: 115 },
    100: {
      id: "C-sharp-1",
      note: "C#",
      sharp: true,
      octave: 1,
      keyCodeNum: 100
    },
    102: { id: "D-1", note: "D", sharp: false, octave: 1, keyCodeNum: 102 },
    103: {
      id: "D-sharp-1",
      note: "D#",
      sharp: true,
      octave: 1,
      keyCodeNum: 103
    },
    104: { id: "E-2", note: "E", sharp: false, octave: 2, keyCodeNum: 104 },
    106: { id: "F-2", note: "F", sharp: false, octave: 2, keyCodeNum: 106 },
    107: {
      id: "F-sharp-2",
      note: "F#",
      sharp: true,
      octave: 2,
      keyCodeNum: 107
    },
    108: { id: "G-2", note: "G", sharp: false, octave: 2, keyCodeNum: 108 },
    59: {
      id: "G-sharp-2",
      note: "G#",
      sharp: true,
      octave: 2,
      keyCodeNum: 59
    },
    113: { id: "A-2", note: "A", sharp: false, octave: 2, keyCodeNum: 113 },
    119: {
      id: "A-sharp-2",
      note: "A#",
      sharp: true,
      octave: 2,
      keyCodeNum: 119
    },
    101: { id: "B-2", note: "B", sharp: false, octave: 2, keyCodeNum: 101 },
    114: { id: "C-2", note: "C", sharp: false, octave: 2, keyCodeNum: 114 },
    116: {
      id: "C-sharp-2",
      note: "C#",
      sharp: true,
      octave: 2,
      keyCodeNum: 116
    },
    121: { id: "D-2", note: "D", sharp: false, octave: 2, keyCodeNum: 121 },
    117: {
      id: "D-sharp-2",
      note: "D#",
      sharp: true,
      octave: 2,
      keyCodeNum: 117
    },
    105: { id: "E-3", note: "E", sharp: false, octave: 3, keyCodeNum: 105 },
    111: { id: "F-3", note: "F", sharp: false, octave: 3, keyCodeNum: 111 },
    112: {
      id: "F-sharp-3",
      note: "F#",
      sharp: true,
      octave: 3,
      keyCodeNum: 112
    },
    49: { id: "G-3", note: "G", sharp: false, octave: 3, keyCodeNum: 49 },
    50: {
      id: "G-sharp-3",
      note: "G#",
      sharp: true,
      octave: 3,
      keyCodeNum: 50
    },
    51: { id: "A-3", note: "A", sharp: false, octave: 3, keyCodeNum: 51 },
    52: {
      id: "A-sharp-3",
      note: "A#",
      sharp: true,
      octave: 3,
      keyCodeNum: 52
    },
    53: { id: "B-3", note: "B", sharp: false, octave: 3, keyCodeNum: 53 },
    54: { id: "C-3", note: "C", sharp: false, octave: 3, keyCodeNum: 54 },
    55: {
      id: "C-sharp-3",
      note: "C#",
      sharp: true,
      octave: 3,
      keyCodeNum: 55
    },
    56: { id: "D-3", note: "D", sharp: false, octave: 3, keyCodeNum: 56 },
    57: {
      id: "D-sharp-3",
      note: "D#",
      sharp: true,
      octave: 3,
      keyCodeNum: 57
    },
    48: { id: "E-4", note: "E", sharp: false, octave: 4, keyCodeNum: 48 }
  };
  public run() {
    var music = this.music;
    // WebFontConfig = { google: { families: [ 'Open+Sans:400,300,600,700:latin' ] } };

    (function() {
      var wf = document.createElement("script");
      wf.src =
        ("https:" == document.location.protocol ? "https" : "http") +
        "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      // wf.async = 'true';
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(wf, s);
    })();

    (function() {
      for (var x in music) {
        if (music[x] !== undefined) {
          var el = document.getElementById(music[x].id + "-player");
          el.className = music[x].sharp == true ? "black" : "white";
        }
      }
    })();

    document.onkeypress = function(event) {
      if (
        event.target !== undefined &&
        (<any>event.target).hasAttribute("id")
      ) {
        var x: any = document.getElementById(
          music[event.keyCode || event.charCode].id
        );
        if (music[event.keyCode || event.charCode].sharp)
          document.getElementById(
            music[event.keyCode || event.charCode].id + "-player"
          ).className =
            "black";
        else
          document.getElementById(
            music[event.keyCode || event.charCode].id + "-player"
          ).className =
            "white";
        var y = document.getElementById(
          music[event.keyCode || event.charCode].id + "-player"
        );
        var c = y.getAttribute("class");
        y.setAttribute("class", c + " typed");
        setTimeout(function() {
          return y.setAttribute("class", c);
        }, 200);
        x.volume = 1;
        x.currentTime = 0;
        x.play();
      }
    };

    (<any>document.getElementById("switch-chars").children[0]).style.display =
      "none";

    document.onclick = function(event) {
      if (
        event.target !== undefined &&
        (<any>event.target).hasAttribute("id")
      ) {
        if ((<any>event.target).id == "switch-chars") {
          var keys = document.getElementsByClassName("keys");
          var etc = (<any>event.target).children;
          var k: any = document.getElementsByClassName("keys");
          var n: any = document.getElementsByClassName("notes");
          etc[0].style.display =
            etc[0].style.display == "none" ? "block" : "none";
          etc[1].style.display =
            etc[0].style.display == "none" ? "block" : "none";
          for (var i = 0; i < k.length; i++) {
            k[i].style.display =
              etc[0].style.display == "none" ? "block" : "none";
            n[i].style.display =
              etc[1].style.display == "none" ? "block" : "none";
          }
          return;
        }
        var d = (<any>event.target).dataset.keycode;
        if (music[d] !== undefined) {
          if (!document.getElementById(music[d].id)) return;
          var x: any = document.getElementById(music[d].id);
          x.volume = 1;
          x.currentTime = 0;
          x.play();
        }
      }
    };
  }

  public playSound(keyCode) {
    var music = this.music;
    // WebFontConfig = { google: { families: [ 'Open+Sans:400,300,600,700:latin' ] } };

    (function() {
      var wf = document.createElement("script");
      wf.src =
        ("https:" == document.location.protocol ? "https" : "http") +
        "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      // wf.async = 'true';
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(wf, s);
    })();

    (function() {
      for (var x in music) {
        if (music[x] !== undefined) {
          var el = document.getElementById(music[x].id + "-player");
          el.className = music[x].sharp == true ? "black" : "white";
        }
      }
    })();

    var x: any = document.getElementById(music[keyCode].id);
    if (music[keyCode].sharp)
      document.getElementById(music[keyCode].id + "-player").className =
        "black";
    else
      document.getElementById(music[keyCode].id + "-player").className =
        "white";
    var y = document.getElementById(music[keyCode].id + "-player");
    var c = y.getAttribute("class");
    y.setAttribute("class", c + " typed");
    setTimeout(function() {
      return y.setAttribute("class", c);
    }, 200);
    x.volume = 1;
    x.currentTime = 0;
    x.play();
  }
}
