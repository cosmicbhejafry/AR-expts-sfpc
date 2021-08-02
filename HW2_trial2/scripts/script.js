// How to load in modules
const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Diagnostics = require('Diagnostics');
const Materials = require('Materials');
const TouchGestures = require('TouchGestures');
var numTaps = 0;
//var boolVisible = false;
const Patches = require('Patches');
const Instruction = require('Instruction'); 
var bool1 = true;

async function attenuateWord(){
	//https://sparkar.facebook.com/ar-studio/learn/reference/classes/scenemodule.particlesystem#properties
	Scene.root.findFirst("emitter0").then(emitter => {
//     Diagnostics.log(emitter.birthrate);
	if(150 - 10*numTaps<0){
	emitter.birthrate = 0;
	//boolVisible = true;
	} else{
		emitter.birthrate = 150 - 10*numTaps;
	}
	
	emitter.outerRadius = 0.6*(2**(-1*numTaps));
	emitter.innerRadius = 0.3*(2**(-1*numTaps));
	emitter.lifespan = 100*(2**(-1*numTaps));
	
	});
}


(async function () {  // Enables async/await in JS [part 1]

	Instruction.bind(bool1, 'tap_to_start');

  TouchGestures.onTap().subscribe(async function (gesture) { // cycle visibility for assets on event
    Diagnostics.log(numTaps);
	numTaps +=1;
	attenuateWord();
	bool1 = (numTaps>14)&&(numTaps<17);
	if(150 - 10*numTaps<0){
		await Patches.inputs.setBoolean('boolVisible', true);
		// bool1 = (numTaps<=16);
	}
		Instruction.bind(bool1,'tap_to_place');
	});


  

})();