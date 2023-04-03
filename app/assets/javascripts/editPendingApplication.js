

function handleRejectButtonClick(event) {
    const id = event.target.getAttribute("data-id");
    window.location.href = "/admin/manage-publishers/reject/" + id;
}

document.querySelectorAll('[name^="rejectPendingApplications_"]').forEach(function(button) {
    button.addEventListener("click", handleRejectButtonClick);
});

const editButtonElements = document.getElementsByName("editPendingApplications");



for (const editButtonElement of editButtonElements) {
  const saveButtonId = `update_${editButtonElement.value}`;

  const organisationNameListElements = document.getElementsByName(
    `organisation_name_${editButtonElement.value}`
  );

  const saveOption = document.getElementById(saveButtonId);
  saveOption.addEventListener("click", function () {
    toggleOrganisationField(organisationNameListElements, editButtonElement);
  });

  editButtonElement.addEventListener("click", function () {
    toggleOrganisationField(organisationNameListElements, this);
  });
}

const toggleOrganisationField = (organisationNameListElements, button) => {
  const approveButton = document.getElementsByName(
    `approvePendingApplications_${button.value}`
  )[0];
  const rejectButton = document.getElementsByName(
    `rejectPendingApplications_${button.value}`
  )[0];

  if (button.innerText === "Edit") {
    button.innerText = "Cancel";
    approveButton.disabled = true;
    rejectButton.disabled = true;

    for (organisationNameListElement of organisationNameListElements) {
      if (organisationNameListElement.style.display === "none")
        organisationNameListElement.style.display = "";
      else organisationNameListElement.style.display = "none";
    }
  } else {
    button.innerText = "Edit";
    approveButton.disabled = false;
    rejectButton.disabled = false;

    for (organisationNameListElement of organisationNameListElements) {
      if (organisationNameListElement.style.display === "none")
        organisationNameListElement.style.display = "";
      else organisationNameListElement.style.display = "none";
    }
  }
};


