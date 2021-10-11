import { TFunction } from "react-i18next";

export const validateExcelFile = (
  file: File | null,
  t: TFunction<"global">
): string | null => {
  //custom Validatons
  if (!file) {
    return t("importCustomersPage.importForm.file.errors.required");
  }
  const fileNameSections: string[] = file.name.split(".");
  const extension: string | undefined =
    fileNameSections.length > 1 ? fileNameSections.pop() : undefined;

  if (extension === undefined) {
    return t("importCustomersPage.importForm.file.errors.missingExtension");
  } else if (extension.length === 0) {
    return t("importCustomersPage.importForm.file.errors.missingExtension");
  } else if (extension !== "xlsx") {
    return t("importCustomersPage.importForm.file.errors.unsupportedExtension");
  }

  return null;
};
