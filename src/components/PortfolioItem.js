import React from 'react'
import PropTypes from "prop-types";

const PortfolioItem = ({ portfolioContent }) => {
    const { title, content, next } = portfolioContent
    return (
        <article className="full-portfolio-content">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <h5>{next}</h5>
        </article>
    )
}

PortfolioItem.propTypes = {
    portfolioContent: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.node,
        next: PropTypes.string,
    }).isRequired,
}

export default PortfolioItem
