import {
  ElementAttributes,
  HTMLSVGElement,
} from "country-flag-icons/react/1x1";
import * as Flags from "country-flag-icons/react/1x1";

export interface FlagProps extends ElementAttributes<HTMLSVGElement> {
  countryCode: string;
}

const CountryFlag = ({ countryCode, ...props }: FlagProps) => {
  const FlagComponent = Flags[countryCode.toUpperCase() as keyof typeof Flags];
  return <FlagComponent {...props} />;
};

export default CountryFlag;
