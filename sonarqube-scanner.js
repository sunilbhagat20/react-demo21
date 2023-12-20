const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: "http://localhost:9000/tutorials?id=react-demo22",
    token: "sqp_4bfa6165e6767be9643f21678d8d146467e7cc50",    
    options: {
      "sonar.projectKey":"react-demo22",
      "sonar.projectName": "react-demo22",
      "sonar.projectDescription": "demo",
      "sonar.sourceEncoding":"UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
        "sonar.exclusions": "test/*, node_modules/*, public/*",
      "sonar.tests":"./src",
      "sonar.testExecutionReportPaths":"test-report.xml",
      "sonar.javascript.lcov.reportPaths":"coverage/lcov.info",
      "sonar.java.binaries": "**/*.java"
    },
  },
  () => process.exit()
);
