import { useState } from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#57b035",
};
function App() {
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#57b035");
  const [currentMessage, setCurrentMessage] = useState("");
  const [nextYear, setNextYear] = useState(null);

  const loadingMessages = [
    "Calculating next year with AI",
    "reading your ahh code",
    "Calculating spacetime vortexes",
  ];

  const handlePredict = async () => {
    if (!year) return;

    setIsLoading(true);
    setNextYear(null);

    // Show each loading message with delay
    for (let i = 0; i < loadingMessages.length; i++) {
      setCurrentMessage(loadingMessages[i]);
      await new Promise((resolve) => setTimeout(resolve, 2500));
    }

    // Calculate and show next year
    const result = parseInt(year) + 1;
    setNextYear(result);
    setIsLoading(false);
    setCurrentMessage("");
  };

  return (
    <>
    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin : "10px"
        }}
      >
        <h1>Year Predictor</h1>
        <h2>Enter the current year to predict next year</h2>

        <div > 
          <input
            type="number"
            placeholder="over here vro"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <button onClick={handlePredict} disabled={!year || isLoading} style={{
         
          marginLeft : "10px"
        }}>
            Predict Next Year
          </button>
        </div>

        {isLoading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: "20px",
            }}
          >
            {/* <Loader2  size={48} /> */}

            <ClipLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            {currentMessage}
          </div>
        )}

        {nextYear && !isLoading && <div> <h1>Next Year: {nextYear}</h1></div>}
      </div>
    </>
  );
}

export default App;
