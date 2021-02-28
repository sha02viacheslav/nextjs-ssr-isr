// stack.ts
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";
import * as cdk from "@aws-cdk/core";
import { Runtime } from "@aws-cdk/aws-lambda";

export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
    new NextJSLambdaEdge(this, "NextJsApp", {
      serverlessBuildOutDir: "./build",
      runtime: Runtime.NODEJS_14_X,
      memory: 1024
    });
  }
}