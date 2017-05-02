var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on React. I have build this for the Complete React Web App Developer course.</p>
            <p>
                Here are some of the tools I have used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = About;