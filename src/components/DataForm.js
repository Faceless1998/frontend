// import React, { useState } from 'react';
// import axios from 'axios';

// const DataForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     value: '',
//     image: null,
//   });
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       image: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataObj = new FormData();
//     formDataObj.append('name', formData.name);
//     formDataObj.append('value', formData.value);
//     formDataObj.append('image', formData.image);

//     try {
//       const response = await axios.post('http://localhost:5000/', formDataObj, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       setSubmittedData(response.data);
//     } catch (error) {
//       console.error('There was an error submitting the form:', error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="text"
//           name="value"
//           value={formData.value}
//           onChange={handleChange}
//           placeholder="Value"
//           required
//         />
//         <input
//           type="file"
//           name="image"
//           onChange={handleFileChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {submittedData && (
//         <div>
//           <h2>Submitted Data:</h2>
//           <p>Name: {submittedData.name}</p>
//           <p>Value: {submittedData.value}</p>
//           <img src={submittedData.imageUrl} alt={submittedData.name} width="100" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DataForm;

import React, { useState } from "react";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    category: "",
    status: "",
    photo: null,
    properties: [{ name: "", value: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handlePhotoChange = (e) => {
    setFormValues({ ...formValues, photo: e.target.files[0] });
  };

  const handlePropertyChange = (index, e) => {
    const { name, value } = e.target;
    const newProperties = formValues.properties.map((property, propIndex) => {
      if (index === propIndex) {
        return { ...property, [name]: value };
      }
      return property;
    });
    setFormValues({ ...formValues, properties: newProperties });
  };

  const handleAddProperty = () => {
    setFormValues({
      ...formValues,
      properties: [...formValues.properties, { name: "", value: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={formValues.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Category: </label>
        <input
          type="text"
          name="category"
          value={formValues.category}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Status: </label>
        <input
          type="text"
          name="status"
          value={formValues.status}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Photo: </label>
        <input
          type="file"
          name="photo"
          value={formValues.photo}
          onChange={handlePhotoChange}
        />
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Properties</label>

        {formValues.properties.map((property, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={property.name}
              onChange={(e) => handlePropertyChange(index, e)}
            />
            :
            <input
              type="text"
              name="value"
              placeholder="value"
              value={property.value}
              onChange={(e) => handlePropertyChange(index, e)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddProperty}>
          +
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
