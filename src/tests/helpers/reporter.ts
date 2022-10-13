import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} from 'jasmine-spec-reporter';

import suitInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: suitInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
