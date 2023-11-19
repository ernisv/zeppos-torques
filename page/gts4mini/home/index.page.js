import * as s from "./index.style";
import * as c from "./content";

const logger = DeviceRuntimeCore.HmLogger.getLogger("torques");

const mappingLabels = c.createFtlbNmMapping(1, 250)
  .map((p) => ({ text: Number(p[0].toFixed(1)) + " - " + Number(p[1].toFixed(1)) }));

Page({
  build() {
    logger.debug("page build invoked");
    hmUI.setStatusBarVisible(false);

    hmUI.createWidget(hmUI.widget.TEXT, {
      ...s.UNIT_LEFT_TEXT_STYLE,
    });

    hmUI.createWidget(hmUI.widget.TEXT, {
      ...s.UNIT_RIGHT_TEXT_STYLE,
    });

    hmUI.createWidget(hmUI.widget.CYCLE_IMAGE_TEXT_LIST, {
      ...s.MAPPING_LIST_STYLE,
      data_array: mappingLabels,
      data_size: mappingLabels.length
    });
  },

  onInit() {
    logger.debug("page onInit invoked");
  },

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
