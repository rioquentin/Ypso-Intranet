/**
 * Treasury Component
 *
 * This component represents the Treasury Panel, which provides links to various financial tools.
 * It displays a set of logos for each tool, and users can click on these logos to navigate to
 * the respective tool's dashboard.
 */


import React from 'react';
import './Treasury.scss';
import { Link } from 'react-router-dom';

function Treasury() {
    // Logique ici
    return (
        <div className="treasury-container">
            <h1>Outils Trésorerie</h1>
            <div className="logos-grid">
                <Link to="/treasury/dashboard">
                    <img src="/logosTreasury/logoDashboard.png" alt="Dashboard Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/expenses">
                    <img src="/logosTreasury/logoExpenses.png" alt="Expenses Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/revenues">
                    <img src="/logosTreasury/logoRevenues.png" alt="Revenues Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/quotes">
                    <img src="/logosTreasury/logoQuotes.png" alt="Quotes Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/invoices">
                    <img src="/logosTreasury/logoInvoices.png" alt="Invoices Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/reports">
                    <img src="/logosTreasury/logoReports.png" alt="Reports Logo for Treasury Tools" />
                </Link>
                <Link to="/treasury/clients">
                    <img src="/logosTreasury/logoClients.png" alt="Clients Logo for Treasury Tools" />
                </Link>
            </div>
        </div>
    );
}

export default Treasury;
