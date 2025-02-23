import React, { useState } from "react";
import './snellen.css';

function SnellenTest() {
    const levels = [
        { size: "48px", letters: "E T O P" },
        { size: "36px", letters: "L P E D" },
        { size: "24px", letters: "F D T C" },
        { size: "16px", letters: "O H P N" },
    ];

    const [currentLevel, setCurrentLevel] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const handleNext = () => {
        if (currentLevel + 1 < levels.length) {
            setCurrentLevel(currentLevel + 1);
        } else {
            setIsCompleted(true);
        }
        setUserInput("");
    };

    return (
        <div >
            <section className='snellen'>
                <div className='container'>
                    <div className='row'>
                        <h1 style={{ textAlign: "left", margin: "0", padding: "0", fontSize: "100px" }}></h1>
                    </div>
                </div>
            </section>
            <br /><br />
            <section className='imtext'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className="test">Snellen Chart Test</h1><br/><br/>
                            {!isCompleted ? (
                                <div>
                                    <p style={{ fontSize: levels[currentLevel].size }}>
                                        {levels[currentLevel].letters}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Type the letters you see"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                                    />
                                    <button onClick={handleNext}>Next</button>
                                </div>
                            ) : (
                                <div>
                                    <h3>Test Completed</h3>
                                    <p style={{ backgroundColor: "green" }}>If you could identify all letters correctly, your vision is likely normal.</p>
                                    <p>If not, consider a professional eye exam.</p>
                                </div>
                            )}
                            <br />
                            <p style={{ fontSize: "20px", fontFamily: "serif" }}>
                                The Snellen test is a standard vision examination used to measure visual acuity. It utilizes a chart known as the Snellen chart, which displays rows of letters that progressively decrease in size. The patient stands at a fixed distance, typically 20 feet, and reads the smallest line of letters they can identify. Each line is associated with a fraction, such as 20/20, which indicates normal vision. If a person’s vision is 20/40, it means they can see at 20 feet what someone with normal vision can see at 40 feet. The Snellen test is simple, non-invasive, and widely used in eye clinics to determine the need for corrective lenses or further eye examination.
                            </p>
                            <p style={{ fontSize: "20px", fontFamily: "serif" }}>
                               


                                   <h1> What’s Next After the Snellen Chart Test?</h1> What’s Next After the Snellen Chart Test?
                                    While the Snellen chart test gives a quick assessment of your visual acuity, it is just one part of a comprehensive eye examination. Here are the additional measures you can take for better eye health:

                                    Consult an Eye Specialist:
                                    If you find it difficult to read smaller rows on the Snellen chart, schedule a professional eye exam with an ophthalmologist or optometrist for a detailed evaluation.

                                    Check for Refractive Errors:
                                    Conditions like myopia (nearsightedness), hyperopia (farsightedness), or astigmatism can affect your vision. A doctor can prescribe corrective lenses or other treatments if needed.

                                    Screen for Other Eye Conditions:
                                    Comprehensive eye tests can detect early signs of conditions like glaucoma, cataracts, or macular degeneration, which may not be identified by the Snellen test alone.

                                    Adopt Healthy Eye Habits:

                                    Take regular breaks from screens to reduce eye strain (follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds).
                                    Maintain proper lighting while reading or working.
                                    Stay hydrated and eat foods rich in vitamins A, C, and E.
                                    Regular Eye Checkups:
                                    Even if your vision seems fine, regular eye exams are crucial to ensure long-term eye health and catch any potential issues early.

                                    Use Protective Eyewear:
                                    Protect your eyes from harmful UV rays by wearing sunglasses outdoors and safety glasses when working in hazardous environments.


                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SnellenTest;
