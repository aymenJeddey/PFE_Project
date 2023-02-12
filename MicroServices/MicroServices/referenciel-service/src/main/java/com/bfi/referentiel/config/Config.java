package com.bfi.referentiel.config;

import com.bfi.referentiel.common.enumeration.AccountStatus;
import com.bfi.referentiel.common.enumeration.CustomerType;
import com.bfi.referentiel.model.*;
import com.bfi.referentiel.common.enumeration.AccountType;
import com.bfi.referentiel.common.enumeration.Gender;
import com.bfi.referentiel.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Date;

@Component
public class Config implements CommandLineRunner {

    private final GroupRepository groupRepository;
    private final PersonRepository personRepository;
    private final RoleRepository roleRepository;
    private final AgencyRepository agencyRepository;
    private final AccountRepository accountRepository;
    private final ContactRepository contactRepository;
    private final CountryRepository countryRepository;
    private final EmployeeRepository employeeRepository;
    private final CalendarRepository calendarRepository;
    private final AnnualRepository annualRepository;
    private final ExceptionalRepository exceptionalRepository;
    private final WeeklyRepository weeklyRepository;
    private final TierRepository tierRepository;
    private final CurrencyRepository currencyRepository;

    public Config(GroupRepository groupRepository, PersonRepository personRepository, RoleRepository roleRepository, AgencyRepository agencyRepository, AccountRepository accountRepository, ContactRepository contactRepository, CountryRepository countryRepository, EmployeeRepository employeeRepository, CalendarRepository calendarRepository, AnnualRepository annualRepository, ExceptionalRepository exceptionalRepository, WeeklyRepository weeklyRepository, TierRepository tierRepository, CurrencyRepository currencyRepository) {
        this.groupRepository = groupRepository;
        this.personRepository = personRepository;
        this.roleRepository = roleRepository;
        this.agencyRepository = agencyRepository;
        this.accountRepository = accountRepository;
        this.contactRepository = contactRepository;
        this.countryRepository = countryRepository;
        this.employeeRepository = employeeRepository;
        this.calendarRepository = calendarRepository;
        this.annualRepository = annualRepository;
        this.exceptionalRepository = exceptionalRepository;
        this.weeklyRepository = weeklyRepository;
        this.tierRepository = tierRepository;
        this.currencyRepository = currencyRepository;
    }

    @Override
    public void run(String... args) throws Exception {
    }


    @PostConstruct
    public void initDB() {
        // init all data here
        Role role1 = new Role();
        role1.setRole("Testeur");
        roleRepository.save(role1);

        Group g1 = new Group();
        g1.setGroupName("Dev");
        groupRepository.save(g1);

        Tier fares = new Tier();
        fares.setFirstName("Mehdi");
        fares.setLastName("Abidi");
        fares.setLiblon("Mehdi");
        fares.setLibcou("Abidi");
        fares.setRole(role1);
        fares.setCustomerType(CustomerType.physicalCustomer);
        fares.setBirthday(LocalDate.of(1994,10,22));
        fares.setGender(Gender.Male);
        tierRepository.save(fares);

        Tier bank1 = new Tier();
        bank1.setLibcou("ATB");
        bank1.setLiblon("Bank");
        bank1.setCustomerType(CustomerType.moralCustomer);
        bank1.setRole(role1);
        bank1.setResident(true);
        bank1.setReference("85569");
        bank1.setBqloc(true);
        bank1.setAgcent("ATB");
        bank1.setCodbct("9001");
        tierRepository.save(bank1);

        g1.getTiers().add(fares);
        g1.getTiers().add(bank1);
        fares.setGroup(g1);
        bank1.setGroup(g1);

        groupRepository.save(g1);
        tierRepository.save(fares);
        tierRepository.save(bank1);

        Employee emp1 = new Employee();
        emp1.setLastName("Jamal");
        emp1.setFirstName("Frenchum");

        Agency biat = new Agency();
        biat.setLibcou("BiatTN");
        biat.setLiblon("Biat Tunis");
        biat.setNbPerson("50");
        biat.getEmployees().add(emp1);

        emp1.setAgency(biat);
        agencyRepository.save(biat);
        employeeRepository.save(emp1);

        Employee emp2 = new Employee();
        emp2.setLastName("Josh");
        emp2.setFirstName("Tittletross");

        Agency atb = new Agency();
        atb.setLibcou("ATB");
        atb.setLiblon("Tunis");
        atb.setNbPerson("25");
        atb.getEmployees().add(emp1);

        emp2.setAgency(atb);
        agencyRepository.save(atb);
        employeeRepository.save(emp2);

        Account accountTest = new Account();
        accountTest.setActive(true);
        accountTest.setAgency(biat);
        accountTest.setTier(fares);
        accountTest.setCloture(true);
        accountTest.setDateCloture(LocalDate.now());
        accountTest.setSolde(12.08);
        accountTest.setDescription("It's a Test");
        accountTest.setNumCpt("10020215");
        accountTest.setRib("02144741");
        accountTest.setTypeAccount(AccountType.compteCourant);
        accountTest.setAccountStatus(AccountStatus.VALIDATED);

        accountRepository.save(accountTest);

        Calendar calendarTN = new Calendar();
        calendarTN.setDescription("TN Calendar");

        calendarRepository.save(calendarTN);

        Annual annual = new Annual();
        annual.setDay(1);
        annual.setMonth(5);
        annual.setDescription("Fete de Travail");
        annual.setCalendar(calendarTN);
        calendarTN.getAnnuals().add(annual);

        annualRepository.save(annual);
        calendarRepository.save(calendarTN);

        Exceptional exceptional = new Exceptional();
        exceptional.setDescription("Aid");
        exceptional.setDate(new Date());
        exceptional.setCalendar(calendarTN);
        calendarTN.getExceptions().add(exceptional);

        exceptionalRepository.save(exceptional);
        calendarRepository.save(calendarTN);

        Weekly weekly = new Weekly();
        weekly.setDay(DayOfWeek.SUNDAY);
        weekly.setCalendar(calendarTN);
        calendarTN.getDays().add(weekly);

        weeklyRepository.save(weekly);
        calendarRepository.save(calendarTN);

        Weekly weekly1 = new Weekly();
        weekly1.setDay(DayOfWeek.SATURDAY);
        weekly1.setCalendar(calendarTN);
        calendarTN.getDays().add(weekly1);

        weeklyRepository.save(weekly1);
        calendarRepository.save(calendarTN);

        Currency currency = new Currency();
        currency.setCertain(false);
        currency.setDecimalName("Decimal");
        currency.setInternalName("Name");
        currency.setName("Euro");
        currency.setQuantity(650);
        currency.setTranslatedName("Hello");
        currency.setDecimal(10);
        currency.getAccounts().add(accountTest);
        currency.setCalendar(calendarTN);

        currencyRepository.save(currency);

        accountTest.setCurrency(currency);
        calendarTN.getCurrency().add(currency);

        accountRepository.save(accountTest);
        calendarRepository.save(calendarTN);

        Contact contact = new Contact();
        contact.setContactFunction("Contact");
        contact.setContactName("Contact");
        contact.setEmail("Email@test.com");
        contact.setFax("41154756");
        contact.setFormulePolitesse("Test");
        contact.setFreeText("Free Text");
        contact.setLanguage("AR");
        contact.setMobile("55445412");
        contact.setPhone("55221455");
        contact.setTranslatedAddress("Adress");
        contact.setZipCode("5111");
        contact.setTier(fares);

        contactRepository.save(contact);

        fares.getContacts().add(contact);

        tierRepository.save(fares);

        Country country = new Country();
        country.setAreaPhoneCode("+216");
        country.setEmbargo(true);
        country.setName("Tunisie");
        country.setNationality("TN");
        country.setNumericCode("1010");
        country.setTaxConvention(true);
        country.setTranslatedName("Tr Name");

        countryRepository.save(country);

        fares.setCountry(country);

        tierRepository.save(fares);
    }

    @PreDestroy
    public void onDestroy() {

    }
}
