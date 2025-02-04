import React, { FC } from "react";
import { InfixKind } from "./SliderConstants";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./SliderInfix.module.scss";

interface SliderInfixProps extends VibeComponentProps {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind?: InfixKind;
}

const SliderInfix: FC<SliderInfixProps> & { kinds?: typeof InfixKind } = ({ kind = SliderInfix.kinds.PREFIX }) => {
  const [isShow, modificators, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div
        className={cx(
          styles.infix,
          getStyle(styles, kind),
          modificators.map(m => getStyle(styles, m))
        )}
        style={inlineStyle}
      >
        {InfixComponent}
      </div>
    )
  );
};

SliderInfix.kinds = InfixKind;

Object.assign(SliderInfix, {
  kinds: InfixKind
});

export default SliderInfix;
