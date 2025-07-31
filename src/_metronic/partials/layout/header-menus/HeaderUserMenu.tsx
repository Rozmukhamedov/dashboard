import { FC } from "react";
import { useAuth } from "../../../../app/modules/auth";
import { Languages } from "./Languages";
import { toAbsoluteUrl } from "../../../helpers";
import { useIntl } from "react-intl";

const HeaderUserMenu: FC = () => {
  const intl = useIntl();
  const { currentUser, logout } = useAuth();

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <img alt="Logo" src={toAbsoluteUrl("media/avatars/blank.png")} />
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {currentUser?.name}
            </div>
            <div className="fw-bold text-muted fs-7">{currentUser?.email}</div>
          </div>
        </div>
      </div>

      <Languages />
      <div className="menu-item px-5">
        <a onClick={logout} className="menu-link px-5">
          {intl.formatMessage({ id: "COMMON.LOGOUT" })}
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
