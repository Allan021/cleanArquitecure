import {
  Exception,
  Idle,
  Processing,
  ProcessStatus,
  Success,
} from "../../core/Process";
import { ReactElement } from "react";

interface Props<T> {
  processStatus: ProcessStatus<T>;
  idleContent: ReactElement | null;
  processingContent: ReactElement | null;
  exceptionContentFactory: ((e: Error) => ReactElement) | null;
  successContentFactory: ((value: T) => ReactElement) | null;
  sameExceptionAsIdle?: boolean;
  sameExceptionAsProcessing?: boolean;
  sameSuccessAsIdle?: boolean;
}

const ProcessStatusContent = <T,>({
  processStatus,
  idleContent,
  processingContent,
  exceptionContentFactory,
  successContentFactory,
  sameExceptionAsIdle = false,
  sameExceptionAsProcessing = false,
  sameSuccessAsIdle = false,
}: Props<T>) => {
  if (processStatus instanceof Idle) {
    return <>{idleContent}</>;
  } else if (processStatus instanceof Processing) {
    return <>{processingContent}</>;
  } else if (processStatus instanceof Exception) {
    if (sameExceptionAsProcessing) {
      return <>{processingContent}</>;
    } else {
      if (sameExceptionAsIdle) {
        return <>{idleContent}</>;
      } else {
        if (exceptionContentFactory !== null) {
          const error: Error = processStatus.error;
          return <>{exceptionContentFactory?.call(this, error)}</>;
        } else {
          return null;
        }
      }
    }
  } else if (processStatus instanceof Success) {
    if (sameSuccessAsIdle) {
      return <>{idleContent}</>;
    } else {
      if (successContentFactory !== null) {
        const value: T = processStatus.value;
        return <>{successContentFactory?.call(this, value)}</>;
      } else {
        return null;
      }
    }
  }
  return null;
};

export default ProcessStatusContent;
