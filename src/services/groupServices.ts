import { useDispatch, useSelector } from "react-redux";
import { Group_Member } from "../models/Group_Member";
import { AppDispatch, RootState } from "../context";
import { Group_Info } from "../models/Group";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroupInfo } from "../context/actions/groupingActions";

export const groupServices = () => {
  const groupInfoService = () => {
    const groups: Group_Member[] = useSelector(
      (state: RootState) => state.groups?.groupList
    );

    const currentGroupInfo: Group_Info | null = useSelector(
      (state: RootState) => state.groups?.currentGroupInfo
    );

    const [isOpenInvitationForm, setIsOpenInvitationForm] =
      useState<boolean>(false);
    const [isOpenCreateProjectForm, setIsOpenCreateProjectForm] =
      useState<boolean>(false);

    const openInvitationForm = () => setIsOpenInvitationForm(true);
    const closeInvitationForm = () => setIsOpenInvitationForm(false);

    const openCreateProjectForm = () => setIsOpenCreateProjectForm(true);
    const closeCreateProjectForm = () => setIsOpenCreateProjectForm(false);

    const groupInfo: Group_Info = useSelector(
      (state: RootState) => state.groups?.currentGroupInfo
    );

    const dispatch: AppDispatch = useDispatch();

    const params = useParams();

    useEffect(() => {
      params.groupId && dispatch(getGroupInfo(params.groupId as string));
    }, []);

    return {
      groups,
      currentGroupInfo,
      isOpenInvitationForm,
      isOpenCreateProjectForm,
      openInvitationForm,
      closeInvitationForm,
      openCreateProjectForm,
      closeCreateProjectForm,
      groupInfo,
    };
  };

  return {
    groupInfoService,
  };
};
