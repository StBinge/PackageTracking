import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider"
import {Html5Qrcode} from 'html5-qrcode'

declare global {
  interface Window {
      $message: MessageApiInjection,
      $scanner:Html5Qrcode,
      $cameraId:string,
  }
}
