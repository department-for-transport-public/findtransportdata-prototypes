

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

  let organisationFieldText = organisationNameListElements[0].innerText
  let organisationFieldValue = organisationNameListElements[0].getAttribute('value') 

  const organisationSelect =  document.getElementById(`organisation_selection_${editButtonElement.value}`)
  organisationSelect.addEventListener('change', function(event){
      const { options, selectedIndex } = event.target
      const text = options[selectedIndex].text;
      organisationFieldText = text
      organisationFieldValue = text
  })

  const saveOption = document.getElementById(saveButtonId);
  saveOption.addEventListener("click", function () {
    organisationNameListElements[0].innerText = organisationFieldText
    organisationNameListElements[0].setAttribute('value', organisationFieldValue)

    toggleOrganisationField(organisationNameListElements, editButtonElement);
  });

  editButtonElement.addEventListener("click", function () {
    toggleOrganisationField(organisationNameListElements, this);
  });

  const approveButton = document.getElementsByName(
    `approvePendingApplications_${editButtonElement.value}`
  )[0];

  approveButton.addEventListener("click", function () {
    window.location.href = '/admin/manage-publishers/success'
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


