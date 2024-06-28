"use client";

import React from "react";

const Input = ({
	id,
	name,
	type = "text",
	label,
	value,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="form-group">
			<label>{label}</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				className="form-control"
				placeholder={label}
				{...register(id, { required })}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
