import React, { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { FaFileImage } from "react-icons/fa";

const DataForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    category: "",
    status: "",
    photo: null,
    properties: [{ name: "", value: "" }],
  });

  const [frames, setFrames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const processImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = reader.result;
      setFrames([{ url: imageUrl, name: file.name }]);
    };
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormValues({
      ...formValues,
      photo: file,
    });
    processImage(file);
  };

  const handlePropertiesChange = (index, e) => {
    const { name, value } = e.target;
    const newProperties = formValues.properties.map((property, propIndex) => {
      if (index === propIndex) {
        return { ...property, [name]: value };
      }
      return property;
    });

    setFormValues({
      ...formValues,
      properties: newProperties,
    });
  };

  const handleAddProperty = () => {
    setFormValues({
      ...formValues,
      properties: [...formValues.properties, { name: "", value: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("status", formValues.status);
    formData.append("photo", formValues.photo);
    formData.append("properties", JSON.stringify(formValues.properties));
  
    axios
      .post("http://localhost:5000/api/data", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        setFormValues({
          name: "",
          price: "",
          category: "",
          status: "",
          photo: null,
          properties: [{ name: "", value: "" }],
        });
        setFrames([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>პროდუქტის ატვირთვა</div>
      <form onSubmit={handleSubmit} className={styles.forms}>
        <div>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            placeholder="პროდუქტის სახელი"
            required
            className={styles.nameInput}
          />
        </div>
        <div>
          <input
            type="text"
            name="price"
            value={formValues.price}
            onChange={handleInputChange}
            placeholder="პროდუქტის ფასი"
            required
            className={styles.nameInput}
          />
        </div>
        <div>
          <input
            type="text"
            name="category"
            value={formValues.category}
            onChange={handleInputChange}
            placeholder="პროდუქტის კატეგორია"
            required
            className={styles.nameInput}
          />
        </div>
        <div>
          <input
            type="text"
            name="status"
            value={formValues.status}
            onChange={handleInputChange}
            placeholder="პროდუქტის მდგომარეობა"
            required
            className={styles.nameInput}
          />
        </div>
        <div className={styles.uploadBox}>
          <input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
            required
            className={styles.fileInput}
          />
          <div className={styles.iconer}>
            <FaFileImage />
          </div>
          <div className={styles.placeholder}>
            Drop Your Image Here, or{" "}
            <span className={styles.browse}>Browse</span>
          </div>
          {frames.length > 0 && <div>{frames[0].name}</div>}
        </div>
        <div className={styles.propdiv}>
          {formValues.properties.map((property, index) => (
            <div key={index} className={styles.insideprop}>
              <input
                type="text"
                name="name"
                placeholder="მახასიათებელი"
                value={property.name}
                onChange={(e) => handlePropertiesChange(index, e)}
                className={styles.propInput}
              />
              :
              <input
                type="text"
                name="value"
                placeholder="მნიშვნელობა"
                value={property.value}
                onChange={(e) => handlePropertiesChange(index, e)}
                className={styles.propInput}
              />
            </div>
          ))}
        </div>
        <button type="button" onClick={handleAddProperty}>
          {" "}
          +{" "}
        </button>
        <button type="submit" className={styles.reg}>
          ატვირთვა
        </button>
      </form>
    </div>
  );
};

export default DataForm;
