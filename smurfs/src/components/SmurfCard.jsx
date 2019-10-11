import React from 'react';

export default function SmurfCard({ smurf }) {
    return (
        <div>
            {smurf.name}
            <button>Remove</button>
        </div>
    )
};