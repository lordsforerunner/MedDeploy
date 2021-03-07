const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require ('mongoose');
const ejs = require("ejs");


const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


var mainConditions = [];
var otherConditions = [];
var results = [];
var mainCauses = [];
var otherCauses = [];
var recommendations = [];
var age;
var gender;
var mainsymptom;
var othersymptoms;
var possibilitiesAlt = "";



mongoose.connect("mongodb://localhost:27017/lordsDB", { useNewUrlParser: true, useUnifiedTopology: true });



const diagSchema =  new mongoose.Schema({
 
 systontainer: String,
 age: String,
 gender: String,
 symptom: String,
 causes: [String]

});

const Diag = mongoose.model("Diag", diagSchema);


var  thisComplaint
 = new Diag ({
 systontainer: "Dentalpontainer",
 age: "ma",
 gender: "f",
 symptom:"JawNeckBackPain" ,
 causes: ['Acute Coronary Syndrome', 'Pericarditis', 'Bruxism(Habitual Teeth Grinding)', 'Habitual Gum Chewing', 'Dental Abscess']
       
});

//thisComplaint.save();


const actSchema = new mongoose.Schema({
systaction: String,
age: String,
gender: String,
impression: String,
plan: String
});

//"Go to the hospital"



[
     'Dilated Cardiomyopathy',
  'Amyloidosis',
  'Infective Endocarditis',
  'Valvular Heart Disease',
  'Congenital Heart Defects',
  'Coronary Artery Desease',
  'Hypertension',
  'Diabetes Mellitus',
  'Hypoglycemia(low blood sugar)',
  'Smoking',
  'Excessive Alcohol Intake',
  'Excessive Caffeine Intake',
  'Substance Use Disorder',
  'Emotional Stress',
  'Physical Stress',
  'Drug Induced',
  'Myocarditis'    
]


const Act = mongoose.model("Act", actSchema);

var thisAction = new Act ({
   systaction:'Dentalpaction' ,
   age: "i",
   gender: "f",   
   impression:'Lasting Thumb or Bottle Sucking(Myofunctional Habits)'  ,
   plan:   "Go to the hospital"
});

  //thisAction.save();
 


const diagcondSchema =  new mongoose.Schema({
 
 systontainer: String,
 age: String,
 cond: String,
 symptom: String,
 causes: [String]

});

const Diagcond = mongoose.model("Diagcond", diagcondSchema);

//  "notp"  'pplus'   'undefp'

var  thisComplaintcond
 = new Diagcond ({
 systontainer: "Womenpontainer",
 age: "ea",
 cond: 'undefp' ,
 symptom:"BothBreastSwelling" ,
 causes: ['Fibrocystic Breast(Fibroadenosis)', 'Breast Injury',]

});

//thisComplaintcond.save();


const actcondSchema = new mongoose.Schema({
systaction: String,
age: String,
cond: String,
impression: String,
plan: String
});



//  'pplus' "notp"  'undefp'
const Actcond = mongoose.model("Actcond", actcondSchema);

var thisActioncond = new Actcond ({
   systaction: "Womenpaction",
   age: "ea",
   cond:'pplus' ,   
   impression: 'Stroke' ,
   plan:   "Go to the hospital"
});

 //thisActioncond.save();


// Act.deleteOne({
//   systaction:'Orthopaction' ,
//    age: "ma",
//    gender: "m",   
//    impression: 'Kyphosis(exaggerated forward curvature of the spine)',
//    plan:   "Go to the hospital"
//     }, function(err){
//      if(err){
//       console.log(err)
//      }else console.log("Item successfully deleted")
//     });


  

   // Diag.insertMany([thisComplaint], function(err) {
   //  if (err) {
   //   console.log(err)
   //  } else console.log("Successfully saved document in eurekaDB")
   // });

   //   Act.deleteOne({_id : "602159f583342e33f88e367d"
   //  }, function(err){
   //   if(err){
   //    console.log(err)
   //   }else console.log("Item successfully deleted")
   //  });

   //   Act.deleteMany({
   //    impression:'Alcohol Intoxication'
   //  }, function(err){
   //   if(err){
   //    console.log(err)
   //   }else console.log("Items successfully deleted")
   //  });


   

   //   Diag.deleteOne({
   //      systontainer: "Menpontainer",
   //      age: "ya",
   //      gender: "m",
   //      symptom:"Gynecomastia" 
   //      //causes:[] 
       
       

   //  }, function(err){
   //   if(err){
   //    console.log(err)
   //   }else console.log("Item successfully deleted")
   //  });


//   Act.findOne({
//    systaction: "Childrenpaction",
//    age: "c",
//    gender: "m",   
//    impression:'Smoking' ,
//    //plan:   "Go to the hospital"
//  },
//  function(err, foundDoc){
//   if(err){console.log(err)}else {console.log(foundDoc)} 
//  });


//   Diag.findOne({
//    systontainer: "Abdopontainer",
//   age: "ya",
//  gender: "m",
//  symptom:"HardStools"
//  },
//  function(err, foundDoc){
//   if(err){console.log(err)}else {console.log(foundDoc)}
//  });


//  Diag.findOne({
//  systontainer: "Orthopontainer",
//  age: "i",
//  gender: "m",
//  symptom:"OrthoSkinRash" ,
//  causes: ['Systemic Lupus Erythematosus(Autoimmune Disease)', 'Psoriasis', 'Rheumatic Fever',],
//     "RsoreThroat": ['Viral Infection', 'Bacterial Infection', 'Allergies', 'Dry Air', 'Throat Irritation', 'Voice Overuse(throat muscle strain)',  'Systemic Lupus Erythematosus(Autoimmune Disease)', 'Rheumatic Fever', ]
//  },
//  function(err, foundDoc){
//   if(err){console.log(err)}
//   if(foundDoc) {console.log("Document saved already")}
//   else{
//   var  thisComplaint
//  = new Diag ({
//  systontainer: "Orthopontainer",
//  age: "i",
//  gender: "m",
//  symptom:"OrthoSkinRash" ,
//  causes: ['Systemic Lupus Erythematosus(Autoimmune Disease)', 'Psoriasis', 'Rheumatic Fever',],
//     "RsoreThroat": ['Viral Infection', 'Bacterial Infection', 'Allergies', 'Dry Air', 'Throat Irritation', 'Voice Overuse(throat muscle strain)',  'Systemic Lupus Erythematosus(Autoimmune Disease)', 'Rheumatic Fever', ]
// });
// thisComplaint.save();
// console.log("New document entered");
//   }
  
//  });

//  'pplus' "notp"  'undefp'

//  Diagcond.deleteOne({
//  systontainer: "Womenpontainer",
//  age: "ea",
//  cond: "notp" ,
//  symptom: "LvaginalItching",
//  //causes: []
//     }, function(err){
//      if(err){
//       console.log(err)
//      }else console.log("Item successfully deleted")
//     });



// Diagcond.findOne({
// systontainer: "Womenpontainer",
//  age: "t",
//  cond: "undefp",
//  symptom:"Infertility"
 
//  },
//  function(err, foundDoc){
//   if(err){console.log(err)}else {console.log(foundDoc)}
//  });

//   Actcond.findOne({
//  systaction: "Womenpaction",
//  age: "ea",
//  cond:"notp" ,
//  impression: 'Menopause'
//  },
//  function(err, foundDoc){
//   if(err){console.log(err)}else {console.log(foundDoc)}
//  });


//  'pplus' "notp"  'undefp'



//   Actcond.deleteOne({
//       systaction: "Womenpaction",
//       age: "ea",
//       cond:'undefp' ,
//       impression: "RfrequencyFemale",
//       plan:"Go to the hospital"
      
//     }, function(err){
//      if(err){
//       console.log(err)
//      }else console.log("Item successfully deleted")
//     });



app.get("/", function(req, res){

   res.render("home");
});
app.get("/about", function(req, res){

   res.render("about");
});
app.get("/contact", function(req, res){

   res.render("contact");
});
app.get("/terms-of-use", function(req, res){

   res.render("terms-of-use");
});

app.get("/intropreventive", function(req, res){
   const pageid = req.body.button;
  
   res.render("intropreventive", {Pageid: pageid});
});

 app.post("/intropreventive", function(req, res){
   const pageid = req.body.button;
    res.render("intropreventive", {Pageid: pageid});
  
    
 });



 app.get("/abdomen_preventive", function(req, res){
   res.render("abdomen_preventive");
});
app.get("/abdomen_biodata", function(req, res){
   res.render("abdomen_biodata");
});
app.get("/abdomen_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
  
   res.render("abdomen_maincomplaint");    
});
app.get("/abdomen_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
  
   res.render("abdomen_othercomplaints", {Mainsymptom: mainsymptom});

});

app.get("/abdomen_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("abdomen_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});

app.get("/abdomen_advice", function(req, res) {
  
  results = [];

   res.render("abdomen_advice", {Recommendations: recommendations});
});

app.post("/abdomen_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/abdomen_maincomplaint");
   
});

app.post("/abdomen_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Abdopontainer",
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/abdomen_othercomplaints");
    });
 });
app.post("/abdomen_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/abdomen_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Abdopontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/abdomen_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Abdopontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/abdomen_diagnosis");
   });

    }
   }else {res.render("abdomen_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/abdomen_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
    results.forEach(function(result){
      Act.findOne({ 
        systaction: "Abdopaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}
        else{foundDocuments.push(foundDoc)}
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/abdomen_advice");
       }
      });
      
    });
   }
    
 });
 app.post("/abdomen_advice", function(req, res){
    recommendations = [];
 });

  app.post("/abdomen_preventive", function(req, res){
   
    res.render("abdomen_preventive");
   ;
    
 });



 app.get("/bone_preventive", function(req, res){
   res.render("bone_preventive");
});
app.get("/bone_biodata", function(req, res){
   res.render("bone_biodata");
});
app.get("/bone_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("bone_maincomplaint");
});
app.get("/bone_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("bone_othercomplaints",{Mainsymptom: mainsymptom} );
});
app.get("/bone_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
     
   res.render("bone_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/bone_advice", function(req, res) {
  results = [];
   res.render("bone_advice", {Recommendations: recommendations});
});
app.post("/bone_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/bone_maincomplaint");  
});
app.post("/bone_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
     systontainer: "Orthopontainer",
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/bone_othercomplaints");
    });
 });
app.post("/bone_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/bone_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diag.findOne({
      systontainer: "Orthopontainer", 
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/bone_diagnosis")
     }       
   });     
     });
    } else {      
      Diag.findOne({
      systontainer:"Orthopontainer",   
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/bone_diagnosis");
   });
    }
   }else {res.render("bone_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/bone_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({
       systaction:"Orthopaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          
          res.redirect("/bone_advice");
       }
      });     
    });
   }
    
 });
 app.post("/bone_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/bone_preventive", function(req, res){   
    res.render("bone_preventive"); 
 });





 app.get("/brain_preventive", function(req, res){
   res.render("brain_preventive");
});
app.get("/brain_biodata", function(req, res){
   res.render("brain_biodata");
});
app.get("/brain_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("brain_maincomplaint");
});
app.get("/brain_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("brain_othercomplaints",{Mainsymptom: mainsymptom});
});
app.get("/brain_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
     
   res.render("brain_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/brain_advice", function(req, res) {
  results = [];
   res.render("brain_advice", {Recommendations: recommendations});
});
app.post("/brain_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/brain_maincomplaint");  
});
app.post("/brain_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Brainpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/brain_othercomplaints");
    });
 });
app.post("/brain_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/brain_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diag.findOne({
      systontainer: "Brainpontainer", 
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/brain_diagnosis")
     }       
   });     
     });
    } else {      
      Diag.findOne({
      systontainer:"Brainpontainer",   
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/brain_diagnosis");
   });
    }
   }else {res.render("brain_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/brain_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
      if (age == "c"){age = "u"}
       results.forEach(function(result){  
      Act.findOne({ 
        systaction: "Brainpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/brain_advice");
       } 
      });     
    });
   }
    
 });
 app.post("/brain_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/brain_preventive", function(req, res){   
    res.render("brain_preventive"); 
 });
 




 app.get("/chest_preventive", function(req, res){
   res.render("chest_preventive");
});
app.get("/chest_biodata", function(req, res){
   res.render("chest_biodata");
});
app.get("/chest_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("chest_maincomplaint");
});
app.get("/chest_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("chest_othercomplaints", {Mainsymptom: mainsymptom});
});
app.get("/chest_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
     
   res.render("chest_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/chest_advice", function(req, res) {
  results = [];
   res.render("chest_advice", {Recommendations: recommendations});
});
app.post("/chest_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/chest_maincomplaint");  
});
app.post("/chest_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Chestpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}
     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/chest_othercomplaints");
    });
 });
app.post("/chest_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/chest_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diag.findOne({
      systontainer: "Chestpontainer", 
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/chest_diagnosis")
     }       
   });     
     });
    } else {      
      Diag.findOne({
      systontainer:"Chestpontainer",   
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/chest_diagnosis");
   });
    }
   }else {res.render("chest_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/chest_diagnosis", function(req, res){
   if(results.length == 0){ res.redirect("/");}
   else{ 
     var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({ 
        systaction: "Chestpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{
           foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/chest_advice");
       } 
       
       
      });     
    });
   }
 });
 app.post("/chest_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/chest_preventive", function(req, res){   
    res.render("chest_preventive"); 
 });


 

app.get("/children_preventive", function(req, res){
   res.render("children_preventive");
});
app.get("/children_biodata", function(req, res){
   res.render("children_biodata");
});
app.get("/children_maincomplaint", function(req, res){
   mainCauses = [];
   mainCondition = [];
   res.render("children_maincomplaint");
});
app.get("/children_othercomplaints", function(req, res){

   otherCauses = [];
   otherConditions = [];
   res.render("children_othercomplaints", {Mainsymptom: mainsymptom});
});
app.get("/children_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
    
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
     
   res.render("children_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/children_advice", function(req, res) {
  results = [];
   res.render("children_advice", {Recommendations: recommendations});
});
app.post("/children_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/children_maincomplaint");  
});
app.post("/children_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 
 Diag.findOne({
      systontainer: "Childrenpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/children_othercomplaints");
    });
 });
app.post("/children_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/children_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diag.findOne({
      systontainer: "Childrenpontainer", 
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/children_diagnosis")
     }       
   });     
     });
    } else {      
      Diag.findOne({
      systontainer:"Childrenpontainer",   
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/children_diagnosis");
   });
    }
   }else {res.render("children_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/children_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({
        systaction: "Childrenpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
          
         if(err){console.log(err)}
        else{foundDocuments.push(foundDoc);}
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/children_advice");
       } 
       
      });     
    });
    }
    
 });
 app.post("/children_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/children_preventive", function(req, res){   
    res.render("children_preventive"); 
 });




app.get("/dental_preventive", function(req, res){
   res.render("dental_preventive");
});
app.get("/dental_biodata", function(req, res){
   res.render("dental_biodata");
});
app.get("/dental_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("dental_maincomplaint");
});
app.get("/dental_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("dental_othercomplaints",{Mainsymptom: mainsymptom});
});
app.get("/dental_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
     
   res.render("dental_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/dental_advice", function(req, res) {
  results = [];
   res.render("dental_advice", {Recommendations: recommendations});
});
app.post("/dental_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/dental_maincomplaint");  
});
app.post("/dental_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
    systontainer: "Dentalpontainer",
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/dental_othercomplaints");
    });
 });
app.post("/dental_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/dental_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diag.findOne({
      systontainer: "Dentalpontainer", 
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/dental_diagnosis")
     }       
   });     
     });
    } else {      
      Diag.findOne({
      systontainer:"Dentalpontainer",   
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/dental_diagnosis");
   });
    }
   }else {res.render("dental_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/dental_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({
        systaction: "Dentalpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){


         //console.log(results);
         // if(err){console.log("yes")}
         //  else{console.log(foundDoc)}
         // console.log(mainsymptom);(post mainsymptom)




         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/dental_advice");
       }
       
       



      });     
    });
   }
    
 });
 app.post("/dental_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/dental_preventive", function(req, res){   
    res.render("dental_preventive"); 
 });




 app.get("/ent_preventive", function(req, res){
   res.render("ent_preventive");
});
app.get("/ent_biodata", function(req, res){
   res.render("ent_biodata");
});
app.get("/ent_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("ent_maincomplaint");
});
app.get("/ent_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("ent_othercomplaints",{Mainsymptom: mainsymptom});
});
app.get("/ent_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("ent_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/ent_advice", function(req, res) {
  results = [];
   res.render("ent_advice", {Recommendations: recommendations});
});
app.post("/ent_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/ent_maincomplaint");  
});
app.post("/ent_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
    systontainer: "Entpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/ent_othercomplaints");
    });
 });
app.post("/ent_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/ent_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Entpontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/ent_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Entpontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/ent_diagnosis");
   });

    }
   }else {res.render("ent_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/ent_diagnosis", function(req, res){
   
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({
        systaction: "Entpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/ent_advice");
       } 

      });     
    });
   }
    
 });
 app.post("/ent_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/ent_preventive", function(req, res){   
    res.render("ent_preventive"); 
 });




app.get("/eye_preventive", function(req, res){
   res.render("eye_preventive");
});
app.get("/eye_biodata", function(req, res){
   res.render("eye_biodata");
});
app.get("/eye_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("eye_maincomplaint");
});
app.get("/eye_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("eye_othercomplaints",{Mainsymptom: mainsymptom});
});
app.get("/eye_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("eye_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/eye_advice", function(req, res) {
  results = [];
   res.render("eye_advice", {Recommendations: recommendations});
});
app.post("/eye_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/eye_maincomplaint");  
});
app.post("/eye_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Eyepontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/eye_othercomplaints");
    });
 });
app.post("/eye_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/eye_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Eyepontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/eye_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Eyepontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/eye_diagnosis");
   });

    }
   }else {res.render("eye_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/eye_diagnosis", function(req, res){ 
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({ 
        systaction: "Eyepaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/eye_advice");
       } 

      });     
    });
   }
    
 });
 app.post("/eye_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/eye_preventive", function(req, res){   
    res.render("eye_preventive"); 
 });




 app.get("/men_preventive", function(req, res){
   res.render("men_preventive");
});
app.get("/men_biodata", function(req, res){
   res.render("men_biodata");
});
app.get("/men_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("men_maincomplaint");
});
app.get("/men_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("men_othercomplaints", {Mainsymptom: mainsymptom});
});
app.get("/men_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("men_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/men_advice", function(req, res) {
  results = [];
   res.render("men_advice", {Recommendations: recommendations});
});
app.post("/men_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/men_maincomplaint");  
});
app.post("/men_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Menpontainer",
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/men_othercomplaints");
    });
 });
app.post("/men_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/men_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Menpontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/men_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Menpontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/men_diagnosis");
   });

    }
   }else {res.render("men_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/men_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({
        systaction: "Menpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/men_advice");
       }
      });     
    });
   }
    
 });
 app.post("/men_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/men_preventive", function(req, res){   
    res.render("men_preventive"); 
 });



 app.get("/mind_preventive", function(req, res){
   res.render("mind_preventive");
});
app.get("/mind_biodata", function(req, res){
   res.render("mind_biodata");
});
app.get("/mind_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("mind_maincomplaint");
});
app.get("/mind_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("mind_othercomplaints",{Mainsymptom: mainsymptom});
});
app.get("/mind_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("mind_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/mind_advice", function(req, res) {
  results = [];
   res.render("mind_advice", {Recommendations: recommendations});
});
app.post("/mind_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/mind_maincomplaint");  
});
app.post("/mind_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
    systontainer: "Mindpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/mind_othercomplaints");
    });
 });
app.post("/mind_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/mind_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Mindpontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/mind_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Mindpontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/mind_diagnosis");
   });

    }
   }else {res.render("mind_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/mind_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({ 
        systaction: "Mindpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/mind_advice");
       } 

      });     
    });
   }
    
 });
 app.post("/mind_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/mind_preventive", function(req, res){   
    res.render("mind_preventive"); 
 });




  app.get("/skin_preventive", function(req, res){
   res.render("skin_preventive");
});
app.get("/skin_biodata", function(req, res){
   res.render("skin_biodata");
});
app.get("/skin_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("skin_maincomplaint");
});
app.get("/skin_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("skin_othercomplaints", {Mainsymptom: mainsymptom});
});
app.get("/skin_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {

      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }  
      
   });
   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}

   res.render("skin_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});

app.get("/skin_advice", function(req, res) {
  results = [];
   res.render("skin_advice", {Recommendations: recommendations});
});
app.post("/skin_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  gender = req.body.gender;
  res.redirect("/skin_maincomplaint");  
});
app.post("/skin_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diag.findOne({
      systontainer: "Skinpontainer", 
      age: age,
      gender: gender,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/skin_othercomplaints");
    });
 });
app.post("/skin_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/skin_diagnosis");
   }else {

      if(req.body.othersymptoms) {
   
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
      
      Diag.findOne({
      systontainer: "Skinpontainer",  
      age: age,
      gender: gender,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
      
     if(otherCauses.length === othersymptoms.length){
         
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
       res.redirect("/skin_diagnosis");
     }
   });
     
     });

    } else {
      
      Diag.findOne({
      systontainer: "Skinpontainer",
      age: age,
      gender: gender,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}

     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
        
     res.redirect("/skin_diagnosis");
   });

    }
   }else {res.render("skin_othercomplaints", {Mainsymptom: mainsymptom})}
   }
   
});
 app.post("/skin_diagnosis", function(req, res){
   
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Act.findOne({ 
        systaction: "Skinpaction",
        age: age,
        gender: gender,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/skin_advice");
       } 

      });     
    });
   }
    
 });
 app.post("/skin_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/skin_preventive", function(req, res){   
    res.render("skin_preventive"); 
 });





  app.get("/women_preventive", function(req, res){
   res.render("women_preventive");
});
app.get("/women_biodata", function(req, res){
   res.render("women_biodata");
});
app.get("/women_maincomplaint", function(req, res){
   mainCauses = [];
   mainConditions = [];
   res.render("women_maincomplaint");
});
app.get("/women_othercomplaints", function(req, res){
   otherCauses = [];
   otherConditions = [];
   res.render("women_othercomplaints", {Mainsymptom: mainsymptom});
});
app.get("/women_diagnosis", function(req, res) {
   possibilitiesAlt = "";
   results = [];
  
   if(otherConditions.length == 0){
    mainConditions.forEach(function(maincondition){
       results.push(maincondition);
    })
   }else {
      mainConditions.forEach(function(maincondition){
      p = otherConditions.includes(maincondition);
      if(p == true && results.includes(maincondition) == false){
         results.push(maincondition);
      }   
   });

   }
   
   mainConditions = [];
    otherConditions = [];
    otherCauses = [];
    mainCauses = [];
    recommendations = [];
    
     if(results.length == 0){possibilitiesAlt = 'There appear to be no return for your input, please contact us with your complaint(s) stating your age and gender, so we can accommodate them in the future and do any other deened necessary.'}
   res.render("women_diagnosis", {Results: results, PossibilitiesAlt: possibilitiesAlt });
});
app.get("/women_advice", function(req, res) {
  results = [];
   res.render("women_advice", {Recommendations: recommendations});
});
app.post("/women_biodata", function(req, res) {
const docObj = req.body;
  age = req.body.age;
  cond = req.body.cond;
  res.redirect("/women_maincomplaint");  
});
app.post("/women_maincomplaint", function(req, res){
 mainsymptom = req.body.mainsymptom;
 Diagcond.findOne({
    systontainer: "Womenpontainer", 
      age: age,
      cond: cond,
      symptom: mainsymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {mainCauses.push(foundDoc.causes)}

     mainCauses.forEach(function(maincause){
      maincause.forEach(function(i){
        mainConditions.push(i); 
      });
   });
     
    res.redirect("/women_othercomplaints");
    });
 });
app.post("/women_othercomplaints", function(req, res){
   othersymptoms = req.body.othersymptoms;
   if(otherConditions.length == 0 && req.body.trying == "no"){
       res.redirect("/women_diagnosis");
   }else{

      if(req.body.othersymptoms) {
    
     
     if(othersymptoms instanceof Array) {
        othersymptoms.forEach(function(othersymptom) {
       
      Diagcond.findOne({
      systontainer: "Womenpontainer", 
      age: age,
      cond: cond,
      symptom: othersymptom
   }, function(err, foundDoc) {
      if (err) {console.log(err)}  
     else {otherCauses.push(foundDoc.causes)} 
     if(otherCauses.length === othersymptoms.length){
        otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });
       res.redirect("/women_diagnosis")
     }       
   });     
     });
    } else {      
      Diagcond.findOne({
      systontainer:"Womenpontainer",   
      age: age,
      cond: cond,
      symptom: othersymptoms
   }, function(err, foundDoc) {
      if (err) {console.log(err)}
     else {otherCauses.push(foundDoc.causes)}
     otherCauses.forEach(function(othercause){
           othercause.forEach(function(j){
            otherConditions.push(j);
           });
        });       
     res.redirect("/women_diagnosis");
   });
    }
   }else {res.render("women_othercomplaints", {Mainsymptom: mainsymptom})}
   }

   
});
 app.post("/women_diagnosis", function(req, res){
    if(results.length == 0){ res.redirect("/");}
   else{
      var foundDocuments = [];
       results.forEach(function(result){  
      Actcond.findOne({
        systaction: "Womenpaction",
        age: age,
        cond: cond,
        impression: result 
      }, function(err, foundDoc){
         if(err){console.log(err)}        
        else{foundDocuments.push(foundDoc)}      
        b = recommendations.includes(foundDoc.plan);
          if(b == false)
          {recommendations.push(foundDoc.plan)}
       if (foundDocuments.length === results.length){
          res.redirect("/women_advice");
       } 
       
      });     
    });
   }
    
 });
 app.post("/women_advice", function(req, res){
    recommendations = [];  
 });
  app.post("/women_preventive", function(req, res){   
    res.render("women_preventive"); 
 });

app.listen(3000, function() {
console.log("Server is running on port 3000")
});