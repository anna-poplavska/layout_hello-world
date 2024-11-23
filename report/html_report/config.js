report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document.png",
        "test": "..\\bitmaps_test\\20241123-112417\\Entire_document.png",
        "selector": "",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/hello-world/",
        "expect": 0,
        "viewportLabel": "custom-size",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://localhost:3001/index.html",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -32,
            "height": -130
          },
          "rawMisMatchPercentage": 23.87212643678161,
          "misMatchPercentage": "23.87",
          "analysisTime": 17
        },
        "diffImage": "..\\bitmaps_test\\20241123-112417\\failed_diff_Entire_document.png"
      },
      "status": "fail"
    }
  ]
});