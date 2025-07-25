import React from "react";

export default function Field({ label, children, htmlFor, error }) {

    const id = htmlFor || getChild(children);
    return (
        <div className="form-control">
            {
                label && <label htmlFor={id} className="auth-label">{label}</label>
            }
            {children}
            {
                !!error && <div role="alert" className="text-red-600">{error.message}</div>
            }

        </div>
    );
}

const getChild = (children) => {
    const child = React.Children.only(children);

    if ("id" in child.props) {
        return child.props.id
    }

}