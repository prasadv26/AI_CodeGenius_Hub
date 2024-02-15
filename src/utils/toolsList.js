import Img2 from "../assets/website/code_analysis.jpg";

export const toolsList = [
  {
    id: "codeanalysis",
    name: "Code Analysis",
    img: Img2,
    description: `Introducing our cutting-edge Code Analysis Tool, a robust solution designed to enhance the efficiency and reliability of your software development process`,
    inputPrompt: `As a google gemini ai, provide an in-depth evaluation of the code snippet, check accuracy also focusing on:<br/><br/>
- <strong>Code Duplication:</strong> Identify and quantify any duplicate code blocks. If the duplication percentage is more than 0%, provide insights and recommendations for improvement.<br/>
- <strong>Code Readability:</strong> Assess the code's readability based on factors like variable naming, comments, and structure. If the readability score is less than 10, provide insights and recommendations for improvement. Specifically, if variable or function names are non-descriptive (like 'fun()', 'var', 'a', 'x', 'y'), the readability score should be lower.<br/>
- <strong>Code Complexity:</strong> Estimate the code's complexity using metrics like cyclomatic complexity or Halstead complexity. If the complexity score is more than 0, provide insights and recommendations for improvement.<br/><br/>
Please provide scores for each metric on a scale of 0 to 10, with 10 being the best for readability and 0 being the best for duplication and complexity.<br/><br/>
Structure your response as follows:<br/><br/>
<strong>Code Duplication Percentage:</strong> [percentage value]%<br/>
<strong>Code Readability Score:</strong> [score out of 10]<br/>
<strong>Code Complexity Score:</strong> [score out of 10]<br/><br/>
Remember to provide insights or recommendations for improvement only for the metrics that need improvement.`,
  },
  {
    id: "codeconverter",
    name: "Code Converter",
    img: Img2,
    description: `: Effortlessly translate code between languages for seamless integration. Simplify migration and boost cross-platform compatibility with our versatile tool.`,
    inputPrompt: "Convert the given code to python",
  },
  {
    id: "2",
    img: Img2,
    name: "Testcase Generation",
    inputPrompt: `As a google gemini ai, provide an in-depth evaluation of the code snippet, check accuracy also focusing on:<br/><br/>`,
    description:
      "Automatically generate comprehensive test cases, ensuring thorough coverage and robust testing for your applications.",
    aosDelay: "300",
  },
  {
    id: "3",
    img: Img2,
    name: "Bug Triage",
    description:
      "Streamline the bug triage process with intelligent tools, prioritizing and managing issues efficiently for quicker resolutions.",
    aosDelay: "500",
  },
];
