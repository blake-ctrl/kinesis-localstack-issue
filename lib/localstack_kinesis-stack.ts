import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Stream } from 'aws-cdk-lib/aws-kinesis';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LocalstackKinesisStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const kstream = new Stream(this, "KinesisStream");
    new CfnOutput(this, "KinesisStreamName", {value: kstream.streamName});
  }
}
