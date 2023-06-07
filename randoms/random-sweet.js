let comidasDisponibles = [
    
    {
      comida: "Aussie-Bites",
      ingredientes: "1 c. Oat Flour; 1/3 c. Rolled Oats; 1/4 c. Ground Flaxseed; 1 tbsp. Sunflower Seeds; 2 tbsp. Shredded Coconut; 1 tsp. Chia Seeds; 1 tsp. Raw Quinoa; 1/4 tsp. Baking Soda; 1 pinch Sea Salt; 1/2 c. Minced Dried Fruit (Like Apricots And Raisins); 1/4 c. Softened Butter; 1/4 c. Honey; 2 tsp. Vanilla Extract; 1 Egg White.",
      receta: "Preheat oven to 350ºF. Prepare a mini muffin pan with nonstick spray. Combine the first 9 ingredients (oat flour through salt) in a medium bowl. Add dried fruit, butter, honey, vanilla, and egg white. Mix everything together thoroughly (using your hands helps!) Your mixture should resemble oatmeal cookie dough. Fill about 16 muffin molds with the dough, pressing them down and filling them to the top. Bake for about 10 minutes or until sides are golden brown. Let them sit for 10–15 minutes before trying to remove them from the pan. Let them cool before eating. Store in an airtight container at room temperature. They should last for several days. I actually like them better the day after I made them!",
    },

    {
      comida: "Brownie",
      ingredientes: "Cooking spray; 1 c. (2 sticks) unsalted butter; 6 oz. chocolate (60% cacao), chopped (about 3/4 c.); 2 tsp. pure vanilla extract; 1 tsp. espresso powder; 1 tsp. kosher salt; 1 1/2 c. (300 g.) granulated sugar; 1/2 c. (105 g.) packed light brown sugar; 4 large eggs, room temperature; 1 c. (120 g.) all-purpose flour; 1/2 c. (40 g.) unsweetened cocoa powder.",
      receta: "Step 1: Preheat oven to 350°. Grease a 13-by-9 metal baking pan with cooking spray. Line pan with foil, leaving an overhang on 2 opposite sides. Grease foil with cooking spray. Step 2: In a small pot over medium heat, melt butter. Remove from heat, add chocolate, and stir with a rubber spatula until melted and smooth. Stir in vanilla, espresso powder, and salt. Step 3: In a large bowl, whisk granulated sugar and brown sugar. Whisk in chocolate mixture until smooth. Add eggs, one at a time, whisking to blend after each addition, then continue to whisk until batter is well combined, about 30 seconds more (this will help achieve a shiny, crackly top). Fold in flour and cocoa powder with a spatula just until combined. Step 4: Pour batter into prepared pan. Bake brownie until puffed and set and a tester inserted into the center comes out clean, 22 to 28 minutes. Step 5: Let cool completely in pan. Using foil overhang, remove brownie from pan and cut into squares with a sharp knife.",
    },

    {
      comida: "Dump-Cake",
      ingredientes: "6 c. blueberries; 1/4 c. granulated sugar; 1 tsp. pure vanilla extract; Juice of  ½ a lemon; 1/4 tsp. cinnamon; 1 box yellow cake mix; 1/2 c. (1 stick) cold butter, cut into small cubes; Whipped topping.",
      receta: "Step 1: Preheat oven to 350°. In a medium bowl, combine blueberries, sugar, vanilla, lemon juice, and cinnamon. Pour into a 9inches x 13inches baking pan. Pour cake mix on top and spread into a even layer. Dot top all over with butter and bake until top is golden and fruit is bubbly, 1 hour. Step 2: Serve warm with whipped topping.",
    },
  ];
   /*   Declaro un array vacia que utilizare para guardar 
    los elementos que vayan pasando el metodo random y tambien para los
    elementos que se vayan añadiendo */
    const comidasNuevas=[];
 //Capturamos los elementos del Doom que vamos a utilizar.
  const formulario = document.getElementById("formulario-comida");
  const nombre = document.getElementById("nombre");
  const ingredientes = document.getElementById("ingredientes");
  const receta = document.getElementById("receta");
  const menu = document.getElementById("menu");
  const menuPasado = document.getElementById("menu-pasado");

  // FUNCION PARA AGREGAR COMIDA CON FORMULARIO

 function agregarComida (event) {
  event.preventDefault();
  let nuevaComida = {
    comida: nombre.value,
    ingredientes: ingredientes.value,
    receta: receta.value,
  }
  comidasDisponibles.push(nuevaComida);
  resetearFormulario();
  mostrarMenu();
 }

 formulario.addEventListener("submit", agregarComida);

//Declaro una funcion para resetear el formulario

function resetearFormulario(){
  nombre.value="";
  ingredientes.value="";
  receta.value ="";
}

// FUNCION PARA GENERAR COMIDA RANDOM

function generarComidaRandom() {
  if(comidasDisponibles.length ===0) {
    acabaComida();
    return
  }
  let indiceAleatorio = Math.floor(Math.random()*comidasDisponibles.length);
  let comidaRandom = comidasDisponibles[indiceAleatorio];
  
  comidasNuevas.push(comidaRandom);
  mostrarComida(comidaRandom);
  comidasDisponibles.splice(indiceAleatorio,1);
  mostrarMenu();
  mostrarMenuPasado();
}

generarComidaRandom("onclick",comidasDisponibles); 

// FUNCION MOSTRAR COMIDA

function mostrarComida(comida) {
  let listaComidas = document.getElementById("contenedor-random");
  listaComidas.innerHTML = "";

  let liComida = document.createElement("li");
  liComida.innerHTML = "<strong>Name:</strong> " + comida.comida;
  listaComidas.appendChild(liComida);

  let liIngredientes = document.createElement("li");
  liIngredientes.innerHTML =
    "<strong>Ingredients:</strong> " + comida.ingredientes;
  listaComidas.appendChild(liIngredientes);

  let liReceta = document.createElement("li");
  liReceta.innerHTML = "<strong>Recipe:</strong> " + comida.receta;
  listaComidas.appendChild(liReceta);
}

// FUNCION PARA DAR MENSAJE AL ACABAR LA COMIDA

function acabaComida() {
  let listaAcabaComida = document.getElementById("contenedor-random");
  listaAcabaComida.innerHTML = "<h2>I'm sorry we don't any more recipes !</h2>";
}

// MOSTRAR LISTA DE MENU DISPONIBLE

function mostrarMenu(){
  menu.innerHTML = "";
  for (let showMenu of comidasDisponibles) {
    const li = document.createElement("li");
    li.textContent = showMenu.comida;
    menu.appendChild(li);
  }
}
mostrarMenu();


//  MOSTRAR LISTA COMIDAS USADAS

function mostrarMenuPasado(){
  menuPasado.innerHTML = "";
  for (let showMenuPasado of comidasNuevas) {
    const liPast = document.createElement("li");
    liPast.textContent = showMenuPasado.comida;
    menuPasado.appendChild(liPast);
  }
}
mostrarMenuPasado();
