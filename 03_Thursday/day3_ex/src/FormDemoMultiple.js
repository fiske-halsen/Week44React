import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(JSON.stringify(reservation));
    setReservation({ ...reservation });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="LastName"
        />
        <input name="email" value={reservation.email} placeholder="Email" />
        <input name="phone" value={reservation.phone} placeholder="Phone" />

        <input name="street" value={reservation.street} placeholder="Street" />
        <input name="city" value={reservation.city} placeholder="city" />
        <input name="zip" value={reservation.zip} placeholder="zip" />
        <input
          name="country"
          value={reservation.country}
          placeholder="Country"
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
