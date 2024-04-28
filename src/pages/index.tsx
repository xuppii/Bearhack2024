// import Head from "next/head";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create T3 App</title>
//         <meta name="description" content="Generated by create-t3-app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
//         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//           </h1>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/usage/first-steps"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">First Steps →</h3>
//               <div className="text-lg">
//                 Just the basics - Everything you need to know to set up your
//                 database and authentication.
//               </div>
//             </Link>
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/introduction"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">Documentation →</h3>
//               <div className="text-lg">
//                 Learn more about Create T3 App, the libraries it uses, and how
//                 to deploy it.
//               </div>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { TextField } from '@mui/material';
import Select from 'react-select';
import ReactDOM from "react-dom";
import exampleImage from '../images/bear2.jpg';
//import ForceGraph3D from '3d-force-graph';

//import { createRoot } from 'react-dom/client'

//

// const rootElement = document.getElementById('root')!
// createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
// import {
//   FadeIn,
//   FadeInLeft,
//   FadeInRight,
//   FadeInBottom,
//   FadeInTop,
//   BounceInLeft,
//   BounceInRight,
//   BounceInBottom,
//   BounceInTop,
//   PopIn,
//   PopInLeft,
//   PopInRight,
//   PopInBottom,
//   PopInTop
// } from "react-spring-pop";
//import DiseaseChart from '../components/circle.jsx'

function MyComponent() {
  const [model, setModel] = useState(null as tf.LayersModel | null);
  const [predictionResult, setPredictionResult] = useState(null as string | null);//<Float32Array | null>(null);
  const [symptom, setSymptom] = useState<string | null>(null);;
  const [symptomsList, setSymptomsList] = useState([]);
  //const [predictionResult, setPredictionResult] = useState(null);
  //const [category, setCategory] = useState<string | null>(null);
  const [predictionString, setPredictionString] = useState<string | null>(null);
  const myArray = new Array(1).fill(new Array(132).fill(0)) as number[][];
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const symptom_mapping: Record<string,number> = {
    'itching' : 0,
    'skin_rash':1,
    'nodal_skin_eruptions': 2,
    'continuous_sneezing': 3,
    'shivering': 4,
    'chills': 5,
    'joint_pain': 6,
    'stomach_pain': 7,
    'acidity': 8,
    'ulcers_on_tongue': 9,
    'muscle_wasting': 10,
    'vomiting': 11,
    'burning_micturition': 12,
    'spotting_urination': 13,
    'fatigue': 14,
    'weight_gain': 15,
    'anxiety': 16,
    'cold_hands_and_feets': 17,
    'mood_swings': 18,
    'weight_loss': 19,
    'restlessness': 20,
    'lethargy': 21,
    'patches_in_throat': 22,
    'irregular_sugar_level': 23,
    'cough': 24,
    'high_fever': 25,
    'sunken_eyes': 26,
    'breathlessness': 27,
    'sweating': 28,
    'dehydration': 29,
    'indigestion': 30,
    'headache': 31,
    'yellowish_skin': 32,
    'dark_urine': 33,
    'nausea': 34,
    'loss_of_appetite': 35,
    'pain_behind_the_eyes': 36,
    'back_pain': 37,
    'constipation': 38,
    'abdominal_pain': 39,
    'diarrhoea': 40,
    'mild_fever': 41,
    'yellow_urine': 42,
    'yellowing_of_eyes': 43,
    'acute_liver_failure': 44,
    'fluid_overload': 45,
    'swelling_of_stomach': 46,
    'swelled_lymph_nodes': 47,
    'malaise': 48,
    'blurred_and_distorted_vision': 49,
    'phlegm': 50,
    'throat_irritation': 51,
    'redness_of_eyes': 52,
    'sinus_pressure': 53,
    'runny_nose': 54,
    'congestion': 55,
    'chest_pain': 56,
    'weakness_in_limbs': 57,
    'fast_heart_rate': 58,
    'pain_during_bowel_movements': 59,
    'pain_in_anal_region': 60,
    'bloody_stool': 61,
    'irritation_in_anus': 62,
    'neck_pain': 63,
    'dizziness': 64,
    'cramps': 65,
    'bruising': 66,
    'obesity': 67,
    'swollen_legs': 68,
    'swollen_blood_vessels': 69,
    'puffy_face_and_eyes': 70,
    'enlarged_thyroid': 71,
    'brittle_nails': 72,
    'swollen_extremeties': 73,
    'excessive_hunger': 74,
    'extra_marital_contacts': 75,
    'drying_and_tingling_lips': 76,
    'slurred_speech': 77,
    'knee_pain': 78,
    'hip_joint_pain': 79,
    'muscle_weakness': 80,
    'stiff_neck': 81,
    'swelling_joints': 82,
    'movement_stiffness': 83,
    'spinning_movements': 84,
    'loss_of_balance': 85,
    'unsteadiness': 86,
    'weakness_of_one_body_side': 87,
    'loss_of_smell': 88,
    'bladder_discomfort': 89,
    'foul_smell_ofurine': 90,
    'continuous_feel_of_urine': 91,
    'passage_of_gases': 92,
    'internal_itching': 93,
    'toxic_look_(typhos)': 94,
    'depression': 95,
    'irritability': 96,
    'muscle_pain': 97,
    'altered_sensorium': 98,
    'red_spots_over_body': 99,
    'belly_pain': 100,
    'abnormal_menstruation': 101,
    'dischromic_patches': 102,
    'watering_from_eyes': 103,
    'increased_appetite': 104,
    'polyuria': 105,
    'family_history': 106,
    'mucoid_sputum': 107,
    'rusty_sputum': 108,
    'lack_of_concentration': 109,
    'visual_disturbances': 110,
    'receiving_blood_transfusion': 111,
    'receiving_unsterile_injections': 112,
    'coma': 113,
    'stomach_bleeding': 114,
    'distention_of_abdomen': 115,
    'history_of_alcohol_consumption': 116,
    'fluid_overload': 117,
    'blood_in_sputum': 118,
    'prominent_veins_on_calf': 119,
    'palpitations': 120,
    'painful_walking': 121,
    'pus_filled_pimples': 122,
    'blackheads': 123,
    'scurring': 124,
    'skin_peeling': 125,
    'silver_like_dusting': 126,
    'small_dents_in_nails': 127,
    'inflammatory_nails': 128,
    'blister': 129,
    'red_sore_around_nose': 130,
    'yellow_crust_ooze': 131,
    'prognosis': 132
  }
  const getSymptomIndex = (symptom: string): number | undefined => {

    return symptom_mapping[symptom.value];
  };
  const options = Object.keys(symptom_mapping).filter(key => key !== 'prognosis');
  const formattedOptions = options.map(option => ({
    value: option,
    label: option,
  }));
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  // Custom key press handler
  const handleKeyPress = (event) => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      // If an option is highlighted, select it
      const highlightedOption = document.querySelector('.react-select__option--is-focused');
      if (highlightedOption) {
        highlightedOption.click();
      }
    }
    
  };
 void useEffect(() => {
    async function loadModel() {
        const loadedModel = await tf.loadLayersModel('/model/model.json');
        setModel(loadedModel);
        //loadedModel.summary();

    }
  
    void loadModel();
  }, []);
   useEffect(() => {
    for (let j = 0; j < myArray[0].length; j++) {
      myArray[0][j] = 0;
     }
    // Perform your desired action here
    //console.log('Selected symptoms updated:', selectedSymptoms);
    selectedSymptoms.forEach(symptom => {
      const symptomIndex = getSymptomIndex(symptom)//Object.keys(symptom_mapping).find(key => symptom_mapping[key] === symptom) ?? -1;
      myArray[0][symptomIndex] = 1
      makePrediction()
      // const modifiedZerosArray = tf.tensor(myArray);
      // const prediction = model!.predict(modifiedZerosArray) as tf.Tensor;
      // const resultData = await prediction.data();
      // const result = new Float32Array(resultData);
    });
  }, [selectedSymptoms]); // Watch for changes in selectedSymptoms
;
  const handleInputChange = (event) => {

    const symptom_input = event.target.value
    console.log
    setInputValue(symptom_input);
    const filtered = options.filter(option =>
      option.toLowerCase().startsWith(symptom_input.toLowerCase())
    );
    console.log(filtered)
    setFilteredOptions(filtered);
    
    // console.log(symptom_input);
    // const symptomIndex = Object.keys(symptom_mapping).find(key => symptom_mapping[key] === symptom_input) ?? -1;
    // console.log(symptomIndex);
    // myArray[0]![symptomIndex] = 1; 
    //add symptom to array
    // add symptom to search bar
    // 
    //setSymptom(event.target.value);
  };
  // const handleOptionSelect = (option) => {
  //   setInputValue(option);
  //   setFilteredOptions([]);
  // };
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'flex-start', // Move the content to the start of the flex container
      alignItems: 'center',
      height: '100vh',
      marginLeft: '25%',// Set height of the container to fill the viewport
    }),
    control: (provided, state) => ({
      ...provided,
      // Styles for the control (outer container)
      // border: state.isFocused ? '2px solid #4a90e2' : '2px solid #ccc', // Border color when focused or unfocused
      borderRadius: '8px', // Border radius
      borderColor: ' #333',
      boxShadow: 'none', // Remove box shadow
      backgroundColor: '#333', // Background color
      width: '300px', // Set width of the control
      //margin: '0 auto',
      // '&:hover': {
      //   border: '2px solid #4a90e2', // Border color on hover
      // },
    }),
    menu: (provided, state) => ({
      ...provided,
      
      width: '300px',
      // backgroundColor: '#222', 
      //margin: '0 auto',
    }),
    menuPortal: (provided) => ({
      ...provided,
      // Specify the target element where the menu will be rendered
      zIndex: 9999, // Set a high z-index to ensure the menu appears above other elements
    }), 
    input: (provided) => ({
      ...provided,
      // Styles for the input element (search box)
      color: '#fff', // Text color
    }),
    
  };
  

  const makePrediction = async () => {
    if (model) {
      //const shape = [1, 132];
      // let x: number = 5;

      const disease_mapping: Record<string, number> = {
        'Drug Reaction': 0,
        'Malaria': 1,
        'Allergy': 2,
        'Hypothyroidism': 3,
        'Psoriasis': 4,
        'GERD': 5,
        'Chronic cholestasis': 6,
        'hepatitis A': 7,
        'Osteoarthristis': 8,
        '(vertigo) Paroymsal  Positional Vertigo': 9,
        'Hypoglycemia': 10,
        'Acne': 11,
        'Diabetes ': 12,
        'Impetigo': 13,
        'Hypertension ': 14,
        'Peptic ulcer diseae': 15,
        'Dimorphic hemmorhoids(piles)': 16,
        'Common Cold': 17,
        'Chicken pox': 18,
        'Cervical spondylosis': 19,
        'Hyperthyroidism': 20,
        'Urinary tract infection': 21,
        'Varicose veins': 22,
        'AIDS': 23,
        'Paralysis (brain hemorrhage)': 24,
        'Typhoid': 25,
        'Hepatitis B': 26,
        'Fungal infection': 27,
        'Hepatitis C': 28,
        'Migraine': 29,
        'Bronchial Asthma': 30,
        'Alcoholic hepatitis': 31,
        'Jaundice': 32,
        'Hepatitis E': 33,
        'Dengue': 34,
        'Hepatitis D': 35,
        'Heart attack': 36,
        'Pneumonia': 37,
        'Arthritis': 38,
        'Gastroenteritis': 39,
        'Tuberculosis': 40
      };
      
      //const zerosArray = tf.zeros(shape); 
      //const zerosArray = Array.from({ length: shape[0] }, () => Array.from({ length: shape[1] }, () => 0));
      // const myArray = Array.from({ length: shape[0] }, () =>
      // Array.from({ length: shape[1] }, () => 0)); // Creates [0, 0, 0, 0, 0]
      // const myArray = new Array(shape[0]).fill(new Array(shape[1]).fill(0)) as number[][];
      // myArray[0]![3] = 4; 
      const modifiedZerosArray = tf.tensor(myArray);
      const prediction = model.predict(modifiedZerosArray) as tf.Tensor;
      const resultData = await prediction.data();
      const result = new Float32Array(resultData);
      const max = Math.max(...result);
      const index = result.indexOf(max);
      const diseaseIndex = Object.keys(disease_mapping).find(key => disease_mapping[key] === index) ?? "";
      console.log(diseaseIndex);
      
      setPredictionResult(result);
      setPredictionString(diseaseIndex);
    }
  };
  return (
  //   <div>
  // <DiseaseChart />
  // </div>
  



      <div>
      {/* <TextField variant="outlined" label="Symptom" type="Symptom" onChange={handleInputChange}/> */}
      <Select
    isMulti
    name="symptoms"
    options={formattedOptions}
    className="basic-multi-select"
    classNamePrefix="Symptom"
    onKeyPress={handleKeyPress} // Attach custom key press handler
    captureMenuScroll={false} // Prevent scrolling the menu when capturing keyboard input
    onChange={(selectedOptions) => setSelectedSymptoms(selectedOptions)}
    value={selectedSymptoms}
    placeholder="Symptom"
    styles={customStyles}
    menuPortalTarget={typeof window !== 'undefined' ? document.body : null}

  />
<div
        style={{
          position: 'absolute',
          top: '48%',
          right: '0',
          left: '60%',
          //transform: 'translateX(-%)',

        }}
      >
        Prediction: {predictionString}
      </div>
{<div>
      < img src={exampleImage} alt="Example" />
      </div>}
      {/* <ul>
        {filteredOptions.map(option => (
          <li key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </li>
        ))}
      </ul> */}

      {/* <button onClick={makePrediction}>Make Prediction</button>
      {predictionResult && (
        <div className=' '>
          Prediction Result: {JSON.stringify(predictionResult)}
        <br />
        Maximum Value: {Math.max(...predictionResult)}
        <br/> 
        Index: {predictionResult.indexOf(Math.max(...predictionResult))}
        <br/>
        Index String: {predictionString}
      </div>
      )} */}

    </div>
  );
}

export default MyComponent;

// export default function Home() {
//   return (
//     <>
//       <main className="">
//         {
//         /* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//             Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
//           </h1>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/usage/first-steps"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">First Steps →</h3>
//               <div className="text-lg">
//                 Just the basics - Everything you need to know to set up your
//                 database and authentication.
//               </div>
//             </Link>
//             <Link
//               className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
//               href="https://create.t3.gg/en/introduction"
//               target="_blank"
//             >
//               <h3 className="text-2xl font-bold">Documentation →</h3>
//               <div className="text-lg">
//                 Learn more about Create T3 App, the libraries it uses, and how
//                 to deploy it.
//               </div>
//             </Link>
//           </div>
//         </div> */}
//         <div>hi fellow gentlemen bye</div>
//       </main>
//     </>
//   );
// }
