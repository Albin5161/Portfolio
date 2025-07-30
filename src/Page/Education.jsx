import './Education.css';

const Education = () => {
    return (
        <div className="education-page">
            <h1 className="education-heading">Educational Details</h1>

            <div className="education-card">
                <h3> Bachelor of Computer Applications</h3>
                <p>MG University, Kottayam</p>
                <p>2019 – 2022</p>
                <p>CGPA: 7.5</p>
            </div>

            <div className="education-card">
                <h3> Higher Secondary</h3>
                <p>Holy Corss HSS, Cherpunkal</p>
                <p>2017 – 2019</p>
                <p>Percentage: 82%</p>
            </div>
        </div>
    )
}

export default Education