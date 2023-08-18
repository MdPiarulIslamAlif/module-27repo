function calculateTargetArea(){
   const baseArea = document.getElementById('base-Field');
   const baseAreaString = baseArea.value;
   const baseFieldValue = parseFloat(baseAreaString);

//    height
   const heightArea = document.getElementById('height-Field');
   const heightAreaString = heightArea.value;
   const heightFieldValue = parseFloat(heightAreaString);

   const area = 0.5 * baseFieldValue * heightFieldValue;
  

//    this is triangle-Area 

    const triangleArea = document.getElementById('triangle-Area');
    triangleArea.innerText = area;
     
    baseArea.value = '';
    heightArea.value = '';


}

// rectangle area defiend
function calculateRectangleArea(){
     const rectangleWidth = document.getElementById('rectangle-width');
     const rectangleWidthValue = rectangleWidth.value;
     const rectangleWidthValueConvert = parseFloat(rectangleWidthValue);
     

     const rectangleLength = document.getElementById('rectangle-length');
     const rectangleLengthValue = rectangleLength.value;
      const rectangleLengthValueConvert = parseFloat(rectangleLengthValue);
     
     const rectangleArea = rectangleWidthValueConvert * rectangleLengthValueConvert;
    
     const rectangleAreaInnerText = document.getElementById('rectangle-Area');
     rectangleAreaInnerText.innerText =  rectangleArea;

     rectangleWidth.value = '';
     rectangleLength.value = '';
     

}

