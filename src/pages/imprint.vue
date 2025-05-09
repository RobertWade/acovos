<script lang="ts" setup>
onMounted(() => {
  window.scrollTo(0, 0);
})
</script>

<template>
  <Section class="grid gap-6">
    <Headline title="Privacy Policy" />
    <p>
      The use of our Internet pages is possible without any indication of personal data; however, if a data subject
      wants to use special enterprise services via our website, processing of personal data could become necessary. If
      the processing of personal data is necessary and there is no statutory basis for such processing, we generally
      obtain consent from the data subject. <br>
      <br>
      The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject
      shall always be in line with the General Data Protection Regulation (GDPR), and in accordance with the
      country-specific data protection regulations applicable to the acovos AG. By means of this data protection
      declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the
      personal data we collect, use and process. Furthermore, data subjects are informed, by means of this data
      protection declaration, of the rights to which they are entitled. <br>
      <br>
      WE have implemented numerous technical and organizational measur es to ensure the most complete protection of
      personal data processed through this website. However, Internet-based data transmissions may in principle have
      security gaps, so absolute protection may not be guaranteed. For this reason, every data subject is free to
      transfer personal data to us via alternative means, e.g. by telephone. <br>
    </p>
    <h2>1. Definitions</h2>
    <p>
      Our data protection declaration is based on the terms used by the European legislator for the adoption of the
      General Data Protection Regulation (GDPR) and should be legible and understandable for the general public, as well
      as our customers and business partners. To ensure this, we would like to first explain the terminology used.
      In this data protection declaration, we use the following terms:
    </p>
    <p>
      <b>a) Personal data</b> <br>
      Personal data means any information relating to an identified or identifiable natural person (“data subject”). An
      identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an
      identifier such as a name, an identification number, location data, an online identifier or to one or more factors
      specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural
      person. <br>
      <br>
      <b>b) Data subject</b> <br>
      Data subject is any identified or identifiable natural person, whose personal data is processed by the controller
      responsible for the processing. <br>
      <br>
      <b>c) Processing</b> <br>
      Processing is any operation or set of operations which is performed on personal data or on sets of personal data,
      whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation
      or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making
      available, alignment or combination, restriction, erasure or destruction. <br>
    </p>
    <h2>2. Name and Address of the controller</h2>
    <p>
      Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws
      applicable in Member states of the European Union and other provisions related to data protection is: <br>
      <br>
      acovos AG <br>
      Paradiesrain 14 <br>
      CH-4123 Allschwil 1 <br>
      Switzerland <br>
      <br>
      Phone: <a href="tel:+41614868060">+41 61 486 80 60</a> <br>
      Email: <a href="mailto:info@acovos.ch">info@acovos.ch</a> <br>
      <a href="https://www.acovos.com">https://www.acovos.com</a> <br>
    </p>
  </Section>
</template>


<style scoped>
h2 {
  @apply text-2xl mt-8;
}

a {
  @apply text-primary--d2;
}
</style>


<route lang="yaml">
meta:
  layout: subpage
</route>