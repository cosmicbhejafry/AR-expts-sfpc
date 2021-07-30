### How I animated multiple objects in blender and put it all into SparkAR
~~Warning: tedious procedure ahead~~

Hi! I wanted to animate multiple cubes floating around, and made that animation in blender- but exporting everything and making it work in sparkAR was something I struggled with a lot.

Smol disclaimer: I'm still learning the technical mechanisms of this, because I'm not very familiar with 3D modelling and animation. Please pull if you'd like to contribute to this discussion! All help is greatly appreciated.

**The problem:**
In Blender, I had multiple meshes, and I animated each mesh individually using keyframes- so I had an action corresponding to each mesh. 
Then, I exported all objects to a single file- that resulted in a file with multiple actions. 
On importing this as a 3D Object in SparkAR- it only allowed for 1 Animation Playback Controller for this whole object, thus resulting in application of only one of the baked actions at a time.


**Here's what ultimately ended up working for me:** Exporting all objects manually, and then adding these as assets and adjusting their position in SparkAR. 

To do that, select the mesh/object you want to export first, then while exporting it as a FBX or glTF, on the right you'll see an "Include" tab-
Under the "Limit to" option, just choose the "Selected Objects" button. 
 
