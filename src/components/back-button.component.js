import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function BackButton() {
    let navigate = useNavigate();
    return (
        <div>
          <Link className="back-button" onClick={() => navigate(-1)} style={{textDecoration: 'none'}}> {'<'} Back</Link> 
        </div>
    );
};