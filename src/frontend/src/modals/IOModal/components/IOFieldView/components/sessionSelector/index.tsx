import React, { useState } from "react";
import IconComponent from "@/components/genericIconComponent";
import ShadTooltip from "@/components/shadTooltipComponent";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useUpdateSessionName } from "@/controllers/API/queries/messages/use-rename-session";
import useFlowStore from "@/stores/flowStore";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select-custom";

export default function SessionSelector({
  deleteSession,
  session,
  toggleVisibility,
  isVisible,
  inspectSession,
  updateVisibleSession,
}: {
  deleteSession: (session: string) => void;
  session: string;
  toggleVisibility: () => void;
  isVisible: boolean;
  inspectSession: (session: string) => void;
  updateVisibleSession: (session: string) => void;
}) {
  const currentFlowId = useFlowStore((state) => state.currentFlow?.id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSession, setEditedSession] = useState(session);
  const { mutate: updateSessionName } = useUpdateSessionName();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedSession(e.target.value);
  };

  const handleConfirm = () => {
    setIsEditing(false);
    updateSessionName(
      { old_session_id: session, new_session_id: editedSession },
      {
        onSuccess: () => {
          updateVisibleSession(editedSession);
        },
      },
    );
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedSession(session);
  };

  const handleSelectChange = (value: string) => {
    switch (value) {
      case "rename":
        handleEditClick();
        break;
      case "messageLogs":
        inspectSession(session);
        break;
      case "delete":
        deleteSession(session);
        break;
    }
  };

  return (
    <div className="file-component-accordion-div group">
      <div className="flex w-full items-center justify-between gap-2 overflow-hidden border-b px-2 py-3.5 align-middle">
        <div className="flex min-w-0 items-center gap-2">
          {isEditing ? (
            <Input
              value={editedSession}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.stopPropagation();
                  handleConfirm();
                }
              }}
              onChange={handleInputChange}
              onBlur={(e) => {
                if (
                  !e.relatedTarget ||
                  e.relatedTarget.getAttribute("data-confirm") !== "true"
                ) {
                  handleCancel();
                }
              }}
              autoFocus
              className="h-6 px-1 py-0"
            />
          ) : (
            <ShadTooltip styleClasses="z-50" content={session}>
              <div>
                <Badge
                  variant="gray"
                  size="md"
                  onDoubleClick={handleEditClick}
                  className="block cursor-pointer truncate"
                >
                  {session === currentFlowId ? "Default Session" : session}
                </Badge>
              </div>
            </ShadTooltip>
          )}
        </div>
        <Select open onValueChange={handleSelectChange}>
          <SelectTrigger className="w-8 h-8 p-0 border-none bg-transparent hover:bg-muted focus:ring-0">
            <IconComponent name="MoreHorizontal" className="h-4 w-4" />
          </SelectTrigger>
          <SelectContent side="right" align="start" className="w-40 p-0">
            <SelectItem value="rename" className="py-2 px-3 focus:bg-muted cursor-pointer">
              <div className="flex items-center">
                <IconComponent name="Pencil" className="mr-2 h-4 w-4" />
                Rename
              </div>
            </SelectItem>
            <SelectItem value="messageLogs" className="py-2 px-3 focus:bg-muted cursor-pointer">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <IconComponent name="ScrollText" className="mr-2 h-4 w-4" />
                  Message logs
                </div>
                <IconComponent name="ExternalLink" className="h-4 w-4 ml-2" />
              </div>
            </SelectItem>
            <SelectItem value="delete" className="py-2 px-3 focus:bg-muted cursor-pointer text-red-600 hover:text-red-600">
              <div className="flex items-center">
                <IconComponent name="Trash2" className="mr-2 h-4 w-4" />
                Delete
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}