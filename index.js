//(Step 2) Commentng out old code, putiing in new Function. Keeping code for reference
//let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

//(Step 3) adding function to create create element based on editable parameters
function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

//(Step 3 cont.) calling functions to put in greenCharacter and treeImage
newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);

//(Step 4) calling functions to add additional objects
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

//(Step 5) creating function for object (sword) for character to pick up. Call newImage in newItem for object parameters
function newItem(url, left, bottom) {
  let object = newImage(url, left, bottom);
  //(Step 7) replacing click with double click
  object.addEventListener("dblclick", function () {
    object.remove();
  });
}

//(Step 5 cont.) add a sword item by calling the function above
newItem("assets/sword.png", 500, 405);

//(Step 6) Adding additonal items
newItem("assets/shield.png", 165, 185);
newItem("assets/staff.png", 600, 100);

//(Step 8) Trying to add background
