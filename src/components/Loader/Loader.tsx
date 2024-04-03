import classNames from 'classnames';
import React from 'react';

type Props = {
  isUpdating: boolean;
  isToggleAll: boolean;
};

// eslint-disable-next-line react/display-name
export const Loader: React.FC<Props> = React.memo(
  ({ isUpdating, isToggleAll }) => (
    <div
      className={classNames('modal', 'overlay', {
        'is-active': isUpdating || isToggleAll,
      })}
    >
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  ),
);
