import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { useForm } from 'react-hook-form';

export let details = [];
export const Form = ({ changeState})=> {
  const { register, errors, handleSubmit,watch } = useForm();
  const onSubmit = (data) => {
      details.push(data);
    console.log(details);
    changeState();
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="firstName" ref={register({ required: true })} />
      {errors.firstName && <p>First name is required</p>}
      <label>Last name</label>
      <input
        type="text"
        name="lastName"
        ref={register({ required: true, minLength: 1 })}
      />
      {errors.lastName && <p>Last name is required</p>}
      <label>Email</label>
      <input
        type="email"
        name="email"
        ref={register({
          required: true,
        })}
      />
      {errors.email?.type === "required" && <p>Your input is required</p>}
      <label>Password</label>
      <input
        type="password"
        name="password"
        ref={register({
          required: true,
          minLength: 8,
        })}
      />
      {errors.password?.type === "required" && <p>Your input is required</p>}
      {errors.password?.type === "minLength" && (
        <p>Your password must be larger then 8 characters</p>
      )}
      <label>Retype Password</label>
      <input
        type="password"
        name="retype_password"
        ref={register({
          required: true,
          minLength: 8,
        })}
      />
      {errors.retype_password?.type === "required" && (
        <p>Your input is required</p>
      )}
      {errors.retype_password?.type === "minLength" && (
        <p>Your password must be larger then 8 characters</p>
      )}
      {(watch("password") !== (watch("retype_password"))) && <p>Retype the Correct Password</p>}

      <label>
        <b>Marital status</b>
      </label>
      <div>
        <label
          style={{
            display: "inline-block",
          }}
        >
          <i>Single</i>
          <input
            type="radio"
            value="Single"
            name="maritalStatus"
            ref={register({
              required: true,
            })}
          />
        </label>
        <label style={{ marginLeft: "30px", marginRight: "30px" }}>
          <i>Married</i>
          <input
            type="radio"
            value="Married"
            name="maritalStatus"
            ref={register({
              required: true,
            })}
          />
        </label>
        <label>
          <i>Can't Say</i>
          <input
            type="radio"
            value="Can't Say"
            name="maritalStatus"
            ref={register({
              required: true,
            })}
          />
        </label>
      </div>
      {errors.maritalStatus?.type === "required" && (
        <p>Your input is required</p>
      )}

      <label>
        <b>Choice of food</b>
      </label>
      <div>
        <label>
          <i>Veg</i>
          <input
            type="checkbox"
            value="Veg "
            name="choiceOfFood"
            ref={register({
              required: true,
            })}
          />
        </label>
        <label style={{ marginLeft:"30px",marginRight:"30px" }}>
          <i>Non-Veg</i>
          <input
            type="checkbox"
            value="Non-Veg "
            name="choiceOfFood"
            ref={register({
              required: true,
            })}
          />
        </label>
        <label>
          <i> Western </i>
          <input
            type="checkbox"
            value="Western "
            name="choiceOfFood"
            ref={register({
              required: true,
            })}
          />
        </label>
      </div>
      {errors.choiceOfFood?.type === "required" && (
        <p>Your input is required</p>
      )}

      <label>Country</label>
        <select name="country" placeholder="Select your Country" ref={register({
          required: true,
        })}>
          <option disabled selected hidden>Select your Country</option>
        <option value="India">India</option>
        <option value="America">America</option>
      </select>
      {errors.country?.type === "required" && <p>Your input is required</p>}

      <label>State</label>
        <select name="state" ref={register({
          required: true,
        })}>
          <option disabled selected hidden>Select your Country</option>
          <option disabled >--India--</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Kerala">Kerala</option>
        <option value="Delhi">Delhi</option>
          <option disabled >--America--</option>
        <option value="New York">New York</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
      </select>
        {errors.state?.type === "required" && <p>Your input is required</p>}


      <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
