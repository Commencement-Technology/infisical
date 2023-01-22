import { ReactNode } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';

export type CheckboxProps = Omit<
  CheckboxPrimitive.CheckboxProps,
  'checked' | 'disabled' | 'required'
> & {
  children: ReactNode;
  id: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  isRequired?: boolean;
};

export const Checkbox = ({
  children,
  className,
  id,
  isChecked,
  isDisabled,
  isRequired,
  ...props
}: CheckboxProps): JSX.Element => {
  return (
    <div className="flex items-center text-bunker-300">
      <CheckboxPrimitive.Root
        className={twMerge(
          'flex items-center justify-center w-5 h-5 mr-3 transition-all rounded shadow hover:bg-bunker-200 bg-bunker-300',
          isDisabled && 'bg-bunker-400 hover:bg-bunker-400',
          className
        )}
        required={isRequired}
        checked={isChecked}
        disabled={isDisabled}
        {...props}
        id={id}
      >
        <CheckboxPrimitive.Indicator className="text-bunker-800">
          <FontAwesomeIcon icon={faCheck} size="sm" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="text-sm" htmlFor={id}>
        {children}
        {isRequired && <span className="pl-1 text-red">*</span>}
      </label>
    </div>
  );
};
