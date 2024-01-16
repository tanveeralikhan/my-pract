import React, { useState } from "react";

import { useUserRole } from "../../../hooks/useUserRole";
import { ROLE } from "../../../_helpers/Role";

const MyPage = () => {
  //checking the role
  useUserRole([ROLE.Admin]);

  return <>My Page</>;
};

export default MyPage;
