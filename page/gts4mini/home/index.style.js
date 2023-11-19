import { gettext } from "i18n";

const logger = DeviceRuntimeCore.HmLogger.getLogger("torques");

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
  hmSetting.getDeviceInfo();

const textSize = 36;

export const textH = textSize * 2;

export const UNIT_RIGHT_TEXT_STYLE = {
  text: gettext("unitsLabelFtlb") + "   ",
  x: 0,
  y: 0,
  w: DEVICE_WIDTH,
  h: textH,
  color: 0xffffff,
  text_size: textSize,
  align_h: hmUI.align.RIGHT,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
};

export const UNIT_LEFT_TEXT_STYLE = {
  text: "   " + gettext("unitsLabelNm"),
  x: 0,
  y: 0,
  w: DEVICE_WIDTH,
  h: textH,
  color: 0xffffff,
  text_size: textSize,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.NONE,
};

export const MAPPING_LIST_STYLE = {
  x: 0,
  y: textH,
  w: DEVICE_WIDTH,
  h: DEVICE_WIDTH - textH,
  item_height: textH,
  item_text_size: textSize
};
