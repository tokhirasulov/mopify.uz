import * as React from "react";
import {
  parsePhoneNumberFromString,
  AsYouType,
  getCountryCallingCode,
} from "libphonenumber-js";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "type" | "onChange"
> & {
  onChange?: (formattedPhone: string) => void;
  defaultCountry?: string;
  value?: string;
};

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, onChange, defaultCountry = "UZ", value, ...props }, ref) => {
    const countryCode = `+${getCountryCallingCode(defaultCountry)}`;
    const [inputValue, setInputValue] = React.useState(countryCode + " ");

    React.useEffect(() => {
      if (value !== undefined) {
        // Ensure value always starts with country code
        if (!value.startsWith(countryCode)) {
          setInputValue(countryCode + " " + value.replace(/^\+?\d+\s*/, ""));
        } else {
          setInputValue(value);
        }
      }
    }, [value, countryCode]);

    const getFlagEmoji = (code: string) => {
      return code
        .toUpperCase()
        .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (!newValue.startsWith(countryCode)) {
        newValue = countryCode + " " + newValue.replace(/^\+?\d+\s*/, "");
      }

      // Ensure there's always a space after country code
      if (newValue === countryCode) {
        newValue = countryCode + " ";
      }

      try {
        const formatter = new AsYouType(defaultCountry);
        const formatted = formatter.input(newValue);
        setInputValue(formatted);
        onChange?.(formatted);
      } catch {
        setInputValue(newValue);
        onChange?.(newValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      const cursorPos = input.selectionStart || 0;

      // Prevent deleting country code
      if (
        (e.key === "Backspace" || e.key === "Delete") &&
        cursorPos <= countryCode.length + 1
      ) {
        e.preventDefault();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      const cursorPos = input.selectionStart || 0;

      // Prevent cursor from going before country code
      if (cursorPos < countryCode.length + 1) {
        setTimeout(() => {
          input.setSelectionRange(
            countryCode.length + 1,
            countryCode.length + 1
          );
        }, 0);
      }
    };

    return (
      <div className='relative flex items-center'>
        <div
          className='absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10'
          aria-hidden>
          <span className='text-lg'>{getFlagEmoji(defaultCountry)}</span>
        </div>

        <Input
          ref={ref}
          type='tel'
          inputMode='tel'
          className={cn("w-full pl-10", className)}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          placeholder={`${countryCode} 90 123 45 67`}
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
