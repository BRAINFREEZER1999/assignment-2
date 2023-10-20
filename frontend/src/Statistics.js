import React, { useState, useEffect } from 'react';

function Statistics() {
    const [stats, setStats] = useState(null);

    const fetchStatistics = () => {
        fetch('http://localhost:5000/api/stats')
            .then(response => response.json())
            .then(data => setStats(data))
            .catch(error => console.error('Error fetching statistics:', error));
    }

    useEffect(() => {
        fetchStatistics(); // Call the function on component mount
    }, []);

    if (!stats) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Number of contacts: {stats.numberOfContacts}</li>
                <li>Number of phone numbers: {stats.numberOfPhones}</li>
                <li>Most recent contact time: {new Date(stats.mostRecentContactTime).toLocaleString()}</li>
                <li>Oldest contact creation time: {new Date(stats.oldestContactTime).toLocaleString()}</li>
            </ul>
            <button onClick={fetchStatistics}>Refresh</button> {/* This is the refresh button */}
        </div>
    );
}

export default Statistics;
